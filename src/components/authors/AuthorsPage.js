import React, {Component} from 'react';
import AuthorApi from '../../api/AuthorApi';
import AuthorsList from './AuthorsList';
import {Link} from 'react-router-dom'

class Authors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authors: []
        };
    }
    componentWillMount() {
        this.setState({
            authors: AuthorApi.getAllAuthors()
        });
    }
    render() {
        return (
            <div className="row">
                <h3>Authors</h3>
                <Link to="/author" className="btn btn-default">Add authors</Link>
                <AuthorsList authors={this.state.authors}/>
            </div>
        );
    }
}

export default Authors;
