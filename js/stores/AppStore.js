var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppActions = require('../actions/AppActions');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('react/lib/Object.assign');
var Promise = require('es6-promise').Promise;
require('whatwg-fetch');

var state = {
	plugins: [],
	tagArrays: {
		"analysis": [],
		"color": [],
		"debug": [],
		"extensions": [],
		"fallbacks": [],
		"fonts": [],
		"future": [],
		"fun": [],
		"grids": [],
		"images": [],
		"media-queries": [],
		"optimizations": [],
		"other": [],
		"pack": [],
		"sass": [],
		"shortcuts": [],
		"svg": []
	},
	tags: [
		"analysis",
		"color",
		"debug",
		"extensions",
		"fallbacks",
		"fonts",
		"future",
		"fun",
		"grids",
		"images",
		"media-queries",
		"optimizations",
		"other",
		"pack",
		"sass",
		"shortcuts",
		"svg"
	],
	pluginsLoaded: false,
	selectedTag: false,
	searchTerm: ""
}
var _fullPlugins = [];

var AppStore = assign({}, EventEmitter.prototype, {
	getData: function() {
		return state;
	},
	_search: function(text, tag) {
		state.plugins = [];
		state.searchTerm = text;
		if (tag === undefined) {
			tag = state.selectedTag;
		}
		if (text || tag) {
			_fullPlugins.forEach(function(plugin) {
				var name = plugin.name.toLowerCase();
				var desc = plugin.description.toLowerCase();
				var lowerCaseText = text.toLowerCase();

				if (tag === false || tag === undefined || tag === "") {
					if(name.indexOf(lowerCaseText) > -1 || desc.indexOf(lowerCaseText) > -1) {
						state.plugins.push(plugin);
					}
				} else {
					var tags = plugin.tags;
					for (var i = 0; i < tags.length; i++) {
						if (tags[i] === tag && (name.indexOf(lowerCaseText) > -1 || desc.indexOf(lowerCaseText) > -1)) {
							state.plugins.push(plugin);
							break;
						}
					}
				}
			});
		} else {
			state.plugins = _fullPlugins;
		}
		AppStore.emitChange();
	},
	_selectTag: function(name) {
		if (name === "" || name === undefined || name === null) {
			state.selectedTag = false;
			AppStore._search(state.searchTerm);
		} else {
			state.selectedTag = name;
			AppStore._search(state.searchTerm, name);
		}
		AppStore.emitChange();
	},
	_getPlugins: function() {
		// fetch('https://raw.githubusercontent.com/himynameisdave/postcss-plugins/master/plugins.json')
		// 	.then(this._checkStatus)
		// 	.then(function(response) {
		//     return response.json();
		//   }).then(function(json) {
		//     state.plugins = _fullPlugins = json;
		//     state.pluginsLoaded = true;
		//     AppStore.emitChange();
		//   }).catch(function(ex) {
		//     state.plugins = _fullPlugins = require('postcss-plugins');
		//     state.pluginsLoaded = true;
		//     AppStore.emitChange();
		//   });
		fetch('https://npmsearch.com/query?q=keywords:postcss-plugin&fields=name,rating,description,repository&sort=rating:desc&size=1000')
			.then(this._checkStatus)
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				var results = json.results;
				for (var i = 0; i < results.length; i++) {
					var currentResult = results[i];
					if (currentResult.repository !== undefined) {
						currentResult.repository[0] = AppStore._normalizeLink(currentResult.repository[0]);
					}
				}
				state.plugins = _fullPlugins = results;
				state.pluginsLoaded = true;
				AppStore.emitChange();
			}).catch(function(ex) {
				console.log("ERROR FETCHING", ex);
			})
	},
	_normalizeLink: function(input) {
		var normalized = input
			.toString()
			.match(/(github\.com.*)/gi)
			.toString()
			.replace(".git", "");
		return "https://" + normalized;
	},
	_checkStatus: function(response) {
	  if (response.status >= 200 && response.status < 300) {
	    return response
	  } else {
	    var error = new Error(response.statusText)
	    error.response = response
	    throw error
	  }
	},
	emitChange: function() {
		this.emit('change');
	},
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.actionType) {
		case AppConstants.SEARCH:
			AppStore._search(action.text);
			break;
		case AppConstants.GET_UPDATED_LIST:
			AppStore._getPlugins();
			break;
		case AppConstants.SELECT_TAG:
			AppStore._selectTag(action.name, action.tag);
			break;
		default:
			return false;
	}
	AppStore.emitChange();
	return true;
});

module.exports = AppStore;
