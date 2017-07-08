import React, { Component } from 'react';

import Header from '../components/Header';

class HeaderContainer extends Component {
	constructor(props) {
		super(props);

		this.store = this.props.store;
	}

	componentDidMount() {
		this.unsubcribe = this.store.subscribe(() => this.forceUpdate());
	}

	componentWillUnmount() {
		this.unsubcribe();
	}

	render() {
		const todos = this.store.getState();

		return <Header todos={todos} />;
	}
}

export default HeaderContainer;