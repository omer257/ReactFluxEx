import React, {Component} from 'react';
import logo from '../../logo.svg';
import {Link} from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <Link className="navbar-brand" to='/'>React project</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/page'>Page</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/authors">authors</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
