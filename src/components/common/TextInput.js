import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {

    render() {

        let wrapperClass="form-group";
        if(this.props.error && this.props.error.length>0){
            wrapperClass += " " + "has-error";
        }
        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <input
                    value={this.props.value}
                    type="text"
                    className="form-control"
                    name={this.props.name}
                    ref={this.props.name}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}/>
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        );
    }
} 

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};
export default TextInput;