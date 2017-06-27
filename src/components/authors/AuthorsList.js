import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

class AuthorList extends Component {
    render() {
        let createAuthorRow = (author) => {
            return (
                <div key={author.id}>
                    <Link to={`/author/${author.id}`} >
                    {author.id} - {author.firstName} {author.lastName}</Link>
                    </div>
            )
        }
        return (
            <div className="row">
                <div className="col-md-12 text-left">
                    <div> 
                        {this.props.authors.map(createAuthorRow, this)}
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
