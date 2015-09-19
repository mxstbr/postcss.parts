var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	search: function(text) {
		AppDispatcher.handleAction({
			actionType: AppConstants.SEARCH,
			text: text
		});
	},
  getUpdatedList: function() {
    AppDispatcher.handleAction({
      actionType: AppConstants.GET_UPDATED_LIST
    });
  }
};

module.exports = AppActions;