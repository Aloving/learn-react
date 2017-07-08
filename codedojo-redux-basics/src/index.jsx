import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import reducer from './reducers';
import todos from './todos';
import App from './App';
import { addTodo, deleteTodo, editTodo, toggleTodo } from './actions';

const store = createStore(reducer, todos);
store.subscribe(() => console.log(store.getState()));

class Provider extends Component {
	constructor(props) {
		super(props);

		this.props = props;
	}
	getChildContext() {
		return {
			store: this.props.store,
		};
	}

	render() {
		return this.props.children;
	}
}

Provider.childContextTypes = {
	store: React.PropTypes.object,
};

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
