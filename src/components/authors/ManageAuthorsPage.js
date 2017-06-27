import React, {Component} from 'react';
import AuthorForm from './AuthorForm';
import AuthorApi from '../../api/AuthorApi';
import toastr from 'toastr';
import '../../../node_modules/toastr/build/toastr.min.css';

class ManageAuthorsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {
                id: '',
                firstName: '',
                lastName: ''
            },
            errors:{}
        };
    }
    
    componentWillMount() {
        let authorId = this.props.match.params.id;
        if(authorId){
            this.setState({author: AuthorApi.getAuthorById(authorId)});
        }
    }
    
    setAuthorState = (event) => {
        let field = event.target.name;
        let item = event.target.value;
        this.state.author[field] = item;
        return this.setState({author: this.state.author});
    }
    authorFormIsValid = () => {
        var formIsValid= true;
        this.setState({errors: {}});
        let errors = {};
        if(this.state.author.firstName.length<3){
            errors.firstName = 'First name must be 3 char'
            formIsValid = false;
        }
        this.setState({errors: errors});
        return formIsValid;
    }
    saveAuthor = (event) => {
        event.preventDefault();
        if(!this.authorFormIsValid()){
            return ;
        }
        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Added succesfully! Yay!');
        this.props.history.push('/authors');
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
