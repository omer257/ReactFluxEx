import Dispatcher from '../dispatcher/AppDispatcher';
import AuthorApi from '../api/AuthorApi';
import ActionTypes from '../constants/actionTypes';

var authorActions = {
	createAuthor: function(author) {
		var newAuthor = AuthorApi.saveAuthor(author);

		//Hey dispatcher, go tell all the stores that an author was just created.
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		});
	},

	updateAuthor: function(author) {
		var updatedAuthor = AuthorApi.saveAuthor(author);

		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_AUTHOR,
			author: updatedAuthor
		});
	},

	deleteAuthor: function(id) {
		AuthorApi.deleteAuthor(id);

		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_AUTHOR,
			id: id
		});
	}
};

export default authorActions;