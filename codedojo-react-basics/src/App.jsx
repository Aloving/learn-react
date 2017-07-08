import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import todos from './todos';

// components
import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
		};

		this.handleStatusChange = this.handleStatusChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	componentDidMount() {
		axios
			.get('api/todos')
			.then(res => res.data)
			.then(todos => this.setState({ todos }))
			.catch(this.handleError);
	}

	handleStatusChange(id) {
		axios
			.patch(`/api/todos/${id}`)
			.then(res => {
				let todos = this.state.todos.map(todo => {
					if (todo.id === id) {
						todo.completed = !todo.completed;
					}

					return todo;
				});

				this.setState({ todos });
			})
			.catch(this.handleError);
	}

	handleAdd(title) {
		axios
			.post('/api/todos/', { title })
			.then(res => res.data)
			.then(todo => {
				let todos = [...this.state.todos, todo];
				this.setState({ todos });
			})
			.catch(this.handleError);
	}

	handleEdit(id, title) {
		axios
			.put(`/api/todos/${id}`, { title })
			.then(res => {
				let todos = this.state.todos.map(todo => {
					if (todo.id === id) {
						todo = res.data;
					}
					return todo;
				});

				this.setState({ todos });
			})
			.catch(this.handleError);
	}

	handleDelete(id) {
		axios
			.delete(`/api/todos/${id}`)
			.then(() => {
				let todos = this.state.todos.filter(todo => todo.id !== id);
				this.setState({ todos });
			})
			.catch(this.handleError);
	}

	handleError(err) {
		console.error(err);
	}

	render() {
		return (
			<main>
				<Header title={this.props.title} todos={this.state.todos} />
				<ReactCSSTransitionGroup
					className="todo-list"
					component="section"
					transitionName="slide"
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
					{this.state.todos.map(todo =>
						<Todo
							title={todo.title}
							completed={todo.completed}
							key={todo.id}
							id={todo.id}
							onStatusChange={this.handleStatusChange}
							onDelete={this.handleDelete}
							onEdit={this.handleEdit}
						/>
					)}

				</ReactCSSTransitionGroup>

				<Form onAdd={this.handleAdd} />
			</main>
		);
	}
}

App.propTypes = {
	title: React.PropTypes.string,
	initialData: React.PropTypes.arrayOf(
		React.PropTypes.shape({
			id: React.PropTypes.number.isRequired,
			title: React.PropTypes.string.isRequired,
			completed: React.PropTypes.bool.isRequired,
		})
	).isRequired,
};

App.defaultProps = {
	title: 'React TODO',
};

ReactDOM.render(<App initialData={todos} />, document.getElementById('root'));
