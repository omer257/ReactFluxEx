

import Dispatcher from '../dispatcher/AppDispatcher';
import AuthorApi from '../api/AuthorApi';
import ActionTypes from '../constants/actionTypes';

var InitializeActions = {
	initApp: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				authors: AuthorApi.getAllAuthors()
			}
		});
	}
};

export default InitializeActions;