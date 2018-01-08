import React from 'react';
import Weather from './Weather.js';
import WeatherCard from './WeatherCard.js';
import Search from './Search.js';
import MoonPhase from './MoonPhase.js';
import crystalBall from '../images/crystal-ball.gif';
import '../styles/Main.scss';

const Main = props => {
  return (
    <div className="Main">
      <header className="header-wrapper">
        <button className="home" 
                onClick={props.onBackToHome}>Back to Home</button>
        <h1>Tempestarii</h1>
        <h3 className="app-label">Weather Divination for the Modern Witch</h3>
        <Search getWeather={props.getWeather} />
      </header>
        {
          props.data.currentObservation ?
          <div className="main-wrapper">
            <header>
              <h2 className="city">{props.data.currentObservation.display_location.full}</h2>
              <h3 className="date">{props.data.currentObservation.observation_time}</h3>
            </header>
            <Weather current={props.data}/>
            <h2 className="seven-label">Seven Hour Divination</h2>
            <div className="seven-hr">
              {
                props.data.hourlyForecast && props.data.hourlyForecast.map( (hour, index) => {
                  return <WeatherCard key={index} 
                                      cardType="hour-card" 
                                      fcst={hour}/>
                })
              }
            </div>
            <h2 className="ten-label">Ten Day Divination</h2>
            <section className="ten-day-header">
              <h3>Day</h3>
              <h3>Condition</h3>
              <h3>High</h3>
              <h3>Low</h3>
            </section>
            <div className="ten-day-wrapper">
              {
                props.data.forecast && props.data.forecast.simpleforecast.forecastday.map((day, index) => {
                  return <WeatherCard cardType="TenDay" 
                                      key={index} 
                                      fcst={day} />
                })
              }
            </div>
            <h2>Moon Phase Divination</h2>
            <MoonPhase phase={props.data.moonPhase} 
                       className="moon-label" />
          </div>
          : (
              props.data.error ? <h3 className="error">{props.data.error}</h3> : 
              <img src={crystalBall} 
                   alt="loading..." />
            )
        }
      <footer>
      <p> &#169; Natelena 2018</p>
      </footer>
    </div>
  )
}

export default Main;