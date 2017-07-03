import React, { Component } from 'react';

import './App.css';
import WeatherIcon from './components/WeatherIcon';
import WeatherDetails from './components/WeatherDetails';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			icon: '',
			time: 1,
			city: '',
			temperature: '',
			weatherCode: '',
			fetching: true,
		};
	}

	/* по загрузке компонента подтягивать данные, fetchIP изменяет исходный стейт.
		аналогично запускается в ангуляре на ngOninit.
		Ещё не понятно почему did mount, а не will mount
	 */
	componentWillMount() {
		this.fetchIP();
	}

	fetchWeatherData = city => {
		const baseUrl = `http://api.openweathermap.org`;
		const path = `/data/2.5/weather`;
		const appId = `459fc1107972f9ca8e39abe5f2583722`;
		const query = `units=metric&lang=ru&appid=${appId}`;

		fetch(`${baseUrl}${path}?q=${city}&${query}`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				const date = new Date();
				const time = date.getHours();

				this.setState({
					time,
					city,
					temperature: Math.round(data.main.temp),
					weatherCode: data.weather[0].id,
					fetching: false,
				});
			})
			.catch(error => console.error(error));
	};

	fetchIP = () => {
		fetch('//freegeoip.net/json/')
			.then(response => response.json())
			.then(({ city }) => this.fetchWeatherData(city))
			.catch(error => console.log(error));
	};

	render() {
		const { fetching, icon, time, city, temperature, weatherCode } = this.state;

		/* тут будет висеть загрузка пока-что будет fetching = true,
		 на изменение фетчинга (когда будет вставленно новое состояние) вызывается рендер который 
		 снова выполняет условие,
	   аналог *ngIf где отображение компонента зависит от состояния модели	
		*/
		return fetching
			? <div className="app">Загрузка...</div>
			: <div className="app" data-hour={time}>
					<WeatherIcon icon={icon} weatherCode={weatherCode} time={time} />
					<WeatherDetails city={city} temperature={temperature} />
				</div>;
	}
}

export default App;
