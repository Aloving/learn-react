import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import todos from './todos';

// components
import Header from './components/Header';
import Todo from './components/Todo';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: this.props.initialData,
		};
	}

	render() {
		return (
			<main>
				<Header title={this.props.title} />
				<section className="todo-list">
					{this.state.todos.map(todo =>
						<Todo title={todo.title} completed={todo.completed} key={todo.id} />
					)}

				</section>
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
