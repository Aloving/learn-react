function Hero(props) {
	return (
		<div className="container">
			<img src={props.imageUrl} />
			<h1>{props.title}</h1>
			<p>{props.subtitle}</p>
		</div>
	);
}

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
