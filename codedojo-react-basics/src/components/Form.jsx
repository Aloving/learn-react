import React, { Component } from 'react';

import Button from './Button';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		let title = this.state.title;

		if (title) {
			this.props.onAdd(title);
			this.refs.title.value = '';
		}
	}

	handleChange(event) {
		let title = event.target.value;
		this.setState({ title });
	}

	render() {
		return (
			<form className="todo-form" onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Что нужно сделать?"
					value={this.state.title}
					onChange={this.handleChange}
				/>

				<Button type="submit"> Добавить </Button>
			</form>
		);
	}
}

Form.propTypes = {
	onAdd: React.PropTypes.func.isRequired,
};

export default Form;
