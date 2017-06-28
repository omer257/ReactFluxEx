import React, {Component} from 'react';
import AuthorForm from './AuthorForm';
// import AuthorApi from '../../api/AuthorApi';
import AuthorStore from '../../stores/AuthorStore';
import toastr from 'toastr';
import '../../../node_modules/toastr/build/toastr.min.css';
import authorActions from '../../actions/AuthorActions';

class ManageAuthorsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {
                id: '',
                firstName: '',
                lastName: ''
            },
            errors: {}
        };
    }

    componentWillMount() {
        let authorId = this.props.match.params.id;
        if (authorId) {
            this.setState({
                author: AuthorStore.getAuthorById(authorId)
            });
        }
    }

    setAuthorState = (event) => {
        let field = event.target.name;
        let item = event.target.value;
        let curState = this.state;
        curState.author[field] = item;
        return this.setState({author: curState.author});
    }
    authorFormIsValid = () => {
        var formIsValid = true;
        this.setState({errors: {}});
        let errors = {};
        if (this.state.author.firstName.length < 3) {
            errors.firstName = 'First name must be 3 char'
            formIsValid = false;
        }
        this.setState({errors: errors});
        return formIsValid;
    }
    saveAuthor = (event) => {
        event.preventDefault();
        if (!this.authorFormIsValid()) {
            return;
        }
        if (!this.state.author.id) {
            authorActions.updateAuthor(this.state.author);
        } else {
            authorActions.createAuthor(this.state.author);

        }
        toastr.success('Added succesfully! Yay!');
        this
            .props
            .history
            .push('/authors');
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12 text-left">
                    <h3>Manage authors</h3>
                    <AuthorForm
                        author={this.state.author}
                        onChange={this.setAuthorState}
                        onSave={this.saveAuthor}
                        errors={this.state.errors}/>
                </div>
            </div>
        );
    }
}

export default ManageAuthorsPage;
