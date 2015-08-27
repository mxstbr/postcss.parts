var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppActions = require('../actions/AppActions');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('react/lib/Object.assign');

var _currentPlugins = _fullPlugins = require('postcss-plugins');


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
		default:
			return false;
	}
	AppStore.emitChange();
	return true;
});

module.exports = AppStore;
