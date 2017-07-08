import React, { Component } from 'react';

import List from '../components/List';
import { deleteTodo, editTodo, toggleTodo } from '../actions';

class ListContainer extends Component {
	constructor(props, context) {
		super(props, context);

		this.store = this.context.store;

		this.handleDelete = this.handleDelete.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleDelete(id) {
		this.store.dispatch(deleteTodo(id));
	}

	handleToggle(id) {
		this.store.dispatch(toggleTodo(id));
	}

	handleEdit(id, title) {
		this.store.dispatch(editTodo(id, title));
	}

	componentDidMount() {
		this.unsubcribe = this.store.subscribe(() => this.forceUpdate());
	}

	componentWillUnmount() {
		this.unsubcribe();
	}

	render() {
		const todos = this.store.getState();

		return (
			<List
				todos={todos}
				onDelete={this.handleDelete}
				onToggle={this.handleToggle}
				onEdit={this.handleEdit}
			/>
		);
	}
}

ListContainer.contextTypes = {
	store: React.PropTypes.ojbect,
};

export default ListContainer;
