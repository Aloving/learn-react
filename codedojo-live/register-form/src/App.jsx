import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import './App.css';
import Form from './components/form';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mounted: true,
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ mounted: false }, () => console.log(this.state));
	};

	render() {
		return (
			<div className="app">
				<CSSTransitionGroup
					transitionName="fade"
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionEnter={false}
					transitionLeaveTimeout={300}
				>
					{this.state.mounted && <Form onSubmit={this.handleSubmit} />}
				</CSSTransitionGroup>
			</div>
		);
	}
}

export default App;
