import React, { Component } from 'react';

import Stats from './stats';
import Stopwatch from './stopwatch';

class Header extends Component {
	componentDidMount() {
		this.unsubcribe = this.props.store.subscribe(() => this.forceUpdate());
	}

	componentWillUnmount() {
		this.unsubcribe();
	}

	render() {
		const todos = this.props.store.getState();
		return (
			<header>
				<Stats todos={todos} />
				<h1>Redux Todo</h1>
				<Stopwatch />
			</header>
		);
	}
}

Header.propTypes = {
	todos: React.PropTypes.array.isRequired,
};

export default Header;
