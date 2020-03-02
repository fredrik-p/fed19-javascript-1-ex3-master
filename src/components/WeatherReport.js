import React from 'react';
import WeatherCondition from './WeatherCondition';

const WeatherReport = props => {
	return (
		<div id="WeatherReport">
			<div className="card bg-dark text-white">
				<div className="card-body text-center">
					<h5 className="card-title">The temperature in {props.report.name} is {props.report.main.temp} &deg; C right now, with a humidity of {props.report.main.humidity} %.</h5>

					<h6 className="card-text mt-3 mb-1">Current weather is:</h6>
					<ul className="list-unstyled mb-0">
						{props.report.weather.map(weather => (<WeatherCondition weather={weather} key={weather.id} />))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default WeatherReport;

