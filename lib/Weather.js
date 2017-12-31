import React from 'react';
import '../styles/Weather.scss';



const Weather = props => {
  let weatherIcon = props.current.current_observation.icon;
  let weatherNames = props.current.forecast.txt_forecast.forecastday.reduce( (types, day) => {
    types.push(day.icon);
    return types;
  }, []);
  console.log(weatherNames);
  return (
    <article className="Weather">
      <section>
        <h3>Now</h3>
        <h1>{props.current.current_observation.temp_f}&#176;</h1>
      </section>
      <article className="extremes">
        <section>
          <h4>High</h4>
          <h2>{props.current.forecast.simpleforecast.forecastday[0].high.fahrenheit}&#176;</h2>
        </section>
        <section>
          <h4>Low</h4>
          <h2>{props.current.forecast.simpleforecast.forecastday[0].low.fahrenheit}&#176;</h2>
        </section>
      </article>
      <article className="description">
        {/*<img src={props.current.forecast.txt_forecast.forecastday[3].icon_url}/>*/}
        <img src={"../images/" + weatherIcon + ".svg"} className="current-weather-icon"/>
        <p>{props.current.forecast.txt_forecast.forecastday[0].fcttext}</p>
      </article>
    </article>
  )
}

export default Weather;