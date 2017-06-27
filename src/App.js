import React, {Component} from 'react';
import Header from './components/common/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Routesss from './routes';

// The Header creates links that can be used to navigate between routes.

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Routesss/>
      </div>
    );
  }
}

export default App;
