import React from 'react';

const WeatherCondition = props => {
    return (
        <li className="Weather">
            {props.weather.description}
        </li>
    )
}

export default WeatherCondition;