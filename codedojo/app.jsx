// function Hero(props) {
// 	var count = 0;
// 	function handleClick() {
// 		count += 1;
// 		console.log(count);
// 	}
// }

var Hero = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			byten: 0
		};
	},

	handleClick: function() {
		this.setState({
			count: this.state.count + 1 
		});

		console.log(this.state.count);

		if(this.state.count === 10){
			this.setState({
				byten: this.state.byten + 1
			})
		}
	},

	render: function() {
		return (
			<div className="container">
				<div className="count">{this.state.count}</div>
				<div className="tencount">{this.state.byten}</div>
				<img src={this.props.imageUrl} onClick={this.handleClick} />
				<h1>{this.props.title}</h1>
				<p>{this.props.subtitle}</p>
			</div>
		);
	},
});

ReactDOM.render(
	<div>
		<Hero
			title="React"
			subtitle="Библиотека для создания пользовательских интерфейсов"
			imageUrl="https://facebook.github.io/react/img/logo.svg"
		/>
		<Hero
			title="Angular 2"
			subtitle="Один фреймворк"
			imageUrl="https://facebook.github.io/react/img/logo.svg"
		/>
	</div>,
	document.getElementById('root')
);
