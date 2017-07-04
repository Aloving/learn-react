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

ReactDOM.render(<App title="React TODO"/>, document.getElementById('root'));
