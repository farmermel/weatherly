import React from 'react';
import '../styles/Weather.scss';

export default class Weather extends React.Component {
  constructor() {
    super();
    // console.log(this);
    // unable to find props Why??? possible refactor
    // this.weatherIcon = this.props.current.current_observation.icon; 
    
  }
  // let weatherNames = props.current.forecast.txt_forecast.forecastday.reduce( (types, day) => {
  //   types.push(day.icon);
  //   return types;
  // }, []);
  render() {
    return (
      <article className="Weather">
        <section>
          <h3 className="weather-now">Now</h3>
          <h1>{this.props.current.current_observation.temp_f}&#176;F</h1>
        </section>
        <article className="description">
          <p>{this.props.current.current_observation.weather}</p>
          {/*<img src={props.current.forecast.txt_forecast.forecastday[3].icon_url}/>*/}
          <img src={"../images/" + this.props.current.current_observation.icon + ".svg"} className="current-weather-icon"/>
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
