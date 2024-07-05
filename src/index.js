import React from 'react'; 
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import store from './store'; 
import App from './App'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}> {/* Wrap the App component with the Provider and pass the store. */}
    <App /> {/* Render the App component. */}
  </Provider>,
  document.getElementById('root') // Render the entire app to the element with ID 'root'.
);