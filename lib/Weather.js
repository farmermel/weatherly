import React from 'react';
import '../styles/Weather.scss';

const Weather = props => {
  let weatherIcon = props.current.current_observation.icon;
  // let weatherNames = props.current.forecast.txt_forecast.forecastday.reduce( (types, day) => {
  //   types.push(day.icon);
  //   return types;
  // }, []);
  console.log(props.current.current_observation.weather)
  return (
    <article className="Weather">
      <section>
        <h3 className="weather-now">Now</h3>
        <h1>{props.current.current_observation.temp_f}&#176;</h1>
      </section>
      <article className="description">
        <p>{props.current.current_observation.weather}</p>
        {/*<img src={props.current.forecast.txt_forecast.forecastday[3].icon_url}/>*/}
        <img src={"../images/" + weatherIcon + ".svg"} className="current-weather-icon"/>
      </article>

      <article className="extremes">
        <p>{props.current.forecast.txt_forecast.forecastday[0].fcttext}</p>
        <section>
          <h4 className="current-extremes">High</h4>
          <h2 className="current-extremes">{props.current.forecast.simpleforecast.forecastday[0].high.fahrenheit}&#176;</h2>
        </section>
        <section>
          <h4 className="current-extremes">Low</h4>
          <h2 className="current-extremes">{props.current.forecast.simpleforecast.forecastday[0].low.fahrenheit}&#176;</h2>
        </section>
      </article>
    </article>
  )
}

export default Weather;