import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from '../components/form';
import { addTodo } from '../actions';

function mapDispatchToProps(dispatch){
	return {
		onAdd: title => dispatch(addTodo(title))
	}
}
const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;