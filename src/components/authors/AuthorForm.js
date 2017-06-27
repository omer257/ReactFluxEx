import React, {Component} from 'react';
import TextInput from '../common/TextInput';
import PropTypes from 'prop-types';
class AuthorForm extends Component {

    render() {
        return (
            <form>
                <TextInput
                    value={this.props.author.firstName}
                    type="text"
                    className="form-control"
                    name="firstName"
                    placeholder="Enter Name"
                    label="Enter Name"
                    onChange={this.props.onChange}
                    error={this.props.errors.firstName}/>
                <TextInput
                    value={this.props.author.lastName}
                    type="text"
                    className="form-control"
                    name="lastName"
                    placeholder="Enter Last name"
                    label="Enter Last name"
                    onChange={this.props.onChange}/>

                <button type="submit" className="btn btn-primary" onClick={this.props.onSave}>Submit</button>
            </form>
        );
    }
}

AuthorForm.propTypes = {
    author: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};
AuthorForm.statics = {
   willTransitionTo(transition,component){
       transition.abort();
   }
};
export default AuthorForm;