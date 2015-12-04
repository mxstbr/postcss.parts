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
  },
	selectTag: function(name, tag) {
		AppDispatcher.handleAction({
      actionType: AppConstants.SELECT_TAG,
			name: name,
			tag: tag
    });
	},
	selectPlugin: function(id) {
		AppDispatcher.handleAction({
			actionType: AppConstants.SELECT_PLUGIN,
			id: id
		});
	}
};

module.exports = AppActions;
