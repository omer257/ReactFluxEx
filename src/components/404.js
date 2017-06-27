import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Page extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 text-left">
                    <h3>Page not found.. sorry</h3>
                    <p><img src="http://media02.hongkiat.com/error_404_01/csstricks.jpg" alt="404" /><br />
                    <Link to='/'>Take me home!</Link></p>
                </div>
            </div>
        );
    }
}

export default Page;
