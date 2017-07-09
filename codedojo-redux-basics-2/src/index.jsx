import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
import { getTodos } from './actions';

fetch('/api/todos')
	.then(res => res.json())
	.then(todos => store.dispatch(getTodos(todos)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
