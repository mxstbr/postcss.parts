var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppActions = require('../actions/AppActions');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('react/lib/Object.assign');
var Promise = require('es6-promise').Promise;
require('whatwg-fetch');
var _currentPlugins = [];
var _fullPlugins = [];

var AppStore = assign({}, EventEmitter.prototype, {
	getData: function() {
		return _currentPlugins;
	},
	_search: function(text) {
		_currentPlugins = [];

		if (text) {
			_fullPlugins.forEach(function(plugin) {
				var name = plugin.name.toLowerCase();
				var desc = plugin.description.toLowerCase();
				var test = text.toLowerCase();

				if(name.indexOf(test) > -1 || desc.indexOf(test) > -1) {
					_currentPlugins.push(plugin);
				}
			});
		} else {
			_currentPlugins = _fullPlugins;
		}
	},
	_getPlugins: function() {
		fetch('https://raw.githubusercontent.com/himynameisdave/postcss-plugins/master/plugins.json')
			.then(this._checkStatus)
			.then(function(response) {
		    return response.json();
		  }).then(function(json) {
		    _currentPlugins = _fullPlugins = json;
		    AppStore.emitChange();
		  }).catch(function(ex) {
		    var _currentPlugins = _fullPlugins = require('postcss-plugins');
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
