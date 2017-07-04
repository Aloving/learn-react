import React from 'react';
import ReactDOM from 'react-dom';

function App(props) {
	return (
		<main>
			<header>
				<h1>{props.title}</h1>
			</header>
			<section className="todo-list">
				<div className="todo">

					<button className="checkbox icon">
						<i className="material-icons">check_box_outline_blank</i>
					</button>					

					<span className="todo-title">
						Изучить реакт
					</span>

					<button className="checkbox icon">
						<i className="material-icons">delete</i>
					</button>
				</div>
			</section>
		</main>
	);
}

App.propTypes = {
	title: React.PropTypes.string
};

App.defaultProps = {
	title: 'React TODO'
};

ReactDOM.render(<App />, document.getElementById('root'));
