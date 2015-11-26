var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppActions = require('../actions/AppActions');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('react/lib/Object.assign');
var Promise = require('es6-promise').Promise;
require('whatwg-fetch');

var state = {
	plugins: [],
	pluginsLoaded: false
}
var _fullPlugins = [];

var AppStore = assign({}, EventEmitter.prototype, {
	getData: function() {
		return state;
	},
	_search: function(text) {
		state.plugins = [];

		if (text) {
			_fullPlugins.forEach(function(plugin) {
				var name = plugin.name.toLowerCase();
				var desc = plugin.description.toLowerCase();
				var test = text.toLowerCase();

				if(name.indexOf(test) > -1 || desc.indexOf(test) > -1) {
					state.plugins.push(plugin);
				}
			});
		} else {
			state.plugins = _fullPlugins;
		}
		AppStore.emitChange();
	},
	_getPlugins: function() {
		fetch('https://raw.githubusercontent.com/himynameisdave/postcss-plugins/master/plugins.json')
			.then(this._checkStatus)
			.then(function(response) {
		    return response.json();
		  }).then(function(json) {
		    state.plugins = _fullPlugins = json;
		    state.pluginsLoaded = true;
		    AppStore.emitChange();
		  }).catch(function(ex) {
		    state.plugins = _fullPlugins = require('postcss-plugins');
		    state.pluginsLoaded = true;
		    AppStore.emitChange();
		  });
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
		default:
			return false;
	}
	AppStore.emitChange();
	return true;
});

module.exports = AppStore;
