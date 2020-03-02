import React from 'react';
import SearchCity from './components/SearchCity';
import axios from 'axios';
import WeatherReport from './components/WeatherReport';

class App extends React.Component {
	state = {
		errorMessage: false,
		report: null,
	}

	onSearch = city => {
		axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=069ac4a286dd9ede48e4d4d0db82c766`)
			.then(response => {
				this.setState({
					errorMessage: false,
					report: response.data,
				});
			})

			.catch(err => {
				this.setState({
					errorMessage: `We can't find that city mate! Try a place that exists maybe.. 🙄`,
					report: null,
				})
			});
	}

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity onSearch={this.onSearch} />

					{
						this.state.errorMessage
							? (
								<div className="alert alert-danger text-center">
									{this.state.errorMessage}
								</div>
							)
							: ''
					}

					{
						this.state.report
							? (
								<WeatherReport report={this.state.report} />
							)
							: ''
					}
				</div>
			</div>
		)
	}
}

export default App;
