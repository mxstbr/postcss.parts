var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	search: function(text) {
		AppDispatcher.handleAction({
			actionType: AppConstants.SEARCH,
			text: text
		});
	}
};

module.exports = AppActions;