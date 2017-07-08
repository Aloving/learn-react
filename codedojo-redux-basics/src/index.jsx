import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import reducer from './reducers';
import todos from './todos';
import App from './App';
import { addTodo, deleteTodo, editTodo, toggleTodo } from './actions';

const store = createStore(reducer, todos);
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
