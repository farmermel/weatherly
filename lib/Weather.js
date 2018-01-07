import React from 'react';
import '../styles/Weather.scss';

export default class Weather extends React.Component {
  constructor(props) {
    super();
    // this.weatherIcon = this.props.current.current_observation.icon;  
  }

  render() {
    return (
      <article className="Weather">
        <section>
          <h3 className="weather-now">Now</h3>
          <h1>{this.props.current.currentObservation.temp_f}&#176;F</h1>
        </section>
        <article className="description">
          <p>{this.props.current.currentObservation.weather}</p>
          <img src={"../images/" + this.props.current.currentObservation.icon + ".svg"} className="current-weather-icon"/>
        </article>
        <article className="extremes">
          <p>{this.props.current.forecast.txt_forecast.forecastday[0].fcttext}</p>
          <section>
            <h4 className="current-extremes">High</h4>
            <h2 className="current-extremes">{this.props.current.forecast.simpleforecast.forecastday[0].high.fahrenheit}&#176;F</h2>
          </section>
          <section>
            <h4 className="current-extremes">Low</h4>
            <h2 className="current-extremes">{this.props.current.forecast.simpleforecast.forecastday[0].low.fahrenheit}&#176;F</h2>
          </section>
        </article>
      </article>
    )
  }  
}