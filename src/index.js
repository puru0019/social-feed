import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index'; 
import './css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import data from './data/data.json';

let store = createStore(rootReducer,data);

ReactDOM.render(
	<Provider store ={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
