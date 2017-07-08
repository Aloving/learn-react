import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../components/List';
import { deleteTodo, editTodo, toggleTodo } from '../actions';

function mapStateToProps(state) {
	return {
		todos: state,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onDelete: id => dispatch(deleteTodo(id)),
		onToggle: id => dispatch(toggleTodo(id)),
		onEdit: (id, title) => dispatch(editTodo(id, title)),
	};
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
 