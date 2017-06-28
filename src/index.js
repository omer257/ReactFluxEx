import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import initializeActions from './actions/initializeActions';
import './index.css';
import { BrowserRouter} from 'react-router-dom'


initializeActions.initApp();
// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs
ReactDOM.render((
  <BrowserRouter>
   <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
