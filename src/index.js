import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter} from 'react-router-dom'

// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs
ReactDOM.render((
  <BrowserRouter>
   <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
