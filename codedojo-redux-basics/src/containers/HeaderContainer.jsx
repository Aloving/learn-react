import React, { Component } from 'react';

import Header from '../components/Header';

class HeaderContainer extends Component {
	constructor(props, context) {
		super(props, context);

		this.store = this.context.store;
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

HeaderContainer.contextTypes = {
	store: React.PropTypes.ojbect,
};

export default HeaderContainer;