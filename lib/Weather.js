import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Weather.scss';

export default class Weather extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { currentObservation, forecast } = this.props.current;
    
    return (
      <article className="Weather">
        <section>
          <h3 className="weather-now">
            Now
          </h3>
          <h1>
            { currentObservation.temp_f }&#176;F
          </h1>
        </section>
        <article className="description">
          <p>
            { currentObservation.weather }
          </p>
          <img src={"../images/" + currentObservation.icon + ".svg"} 
               className="current-weather-icon" />
        </article>
        <article className="extremes">
          <p>
            { forecast.txt_forecast.forecastday[0].fcttext }
          </p>
          <section>
            <h4 className="current-extremes">
              High
            </h4>
            <h2 className="current-extremes">
              { forecast.simpleforecast.forecastday[0].high.fahrenheit }&#176;F
            </h2>
          </section>
          <section>
            <h4 className="current-extremes">
              Low
            </h4>
            <h2 className="current-extremes">
              { forecast.simpleforecast.forecastday[0].low.fahrenheit }&#176;F
            </h2>
          </section>
        </article>
      </article>
    );
  }  
}

Weather.propTypes = {
  current: PropTypes.object,
  currentObservation: PropTypes.object
};