import React, {Component} from 'react';

import {Router} from 'react-router-dom';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() { //check if componenet loaded and releasing tick call with setInterval

  }

  componentWillUnmount() { //Killing interval if componnet unloaded

  }
  
  render() {
    return (
      <div className="row">
        <div className="col-md-12 text-left">
          <h3>Welcome to react Page</h3>
          <p>About</p>
        </div>
      </div>
    );
  }
}
About.statics = {
    willTransitionTo (transition, params, query, callback) {
      alert('xxx');
    },
    willTransitionFrom (component, transition, params, query, callback) {
      alert('222');
    }
  }
About.mixins = [
  Router.Navigation,
  Router.State
];
export default About;
