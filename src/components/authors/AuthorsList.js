import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import authorActions from '../../actions/AuthorActions';
import toastr from 'toastr';

class AuthorList extends Component {
    deleteAuthor = (id,event) => {
        event.preventDefault();
        authorActions.deleteAuthor(id);
        toastr.success('Item deleted!');
    }
    render() {
        let createAuthorRow = (author,index) => {
            return (
                <div key={index}>
                    <Link to={`/author/${author.id}`}>
                        {author.id}
                        - {author.firstName}
                        {author.lastName}</Link>&nbsp;
                        <button className="btn btn-danger" onClick={this
                        .deleteAuthor
                        .bind(this, author.id)}>Delete</button>
                </div>
            )
        }
        return (
            <div className="row">
                <div className="col-md-12 text-left">
                    <div>
                        {this
                            .props
                            .authors
                            .map(createAuthorRow, this)}
                    </div>
                </div>
            </div>
        );
    }
}

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired
};

export default AuthorList;
