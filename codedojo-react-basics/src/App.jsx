import React from 'react';
import ReactDOM from 'react-dom';

// components
import Header from './components/Header';
import Todo from './components/Todo';

function App(props) {
	return (
		<main>
			<Header title={props.title} />
			<section className="todo-list">
				<Todo title={"Изучить javascript"} completed={true}/>
				<Todo title={"Изучить React"} completed={false}/>
			</section>
		</main>
	);
}

App.propTypes = {
	title: React.PropTypes.string,
};

App.defaultProps = {
	title: 'React TODO',
};

ReactDOM.render(<App />, document.getElementById('root'));
