import React, {Component} from 'react';
import Weather from './Weather.js';
//not currently using SevenHour for anything
// import SevenHour from './SevenHour.js';
import HourCard from './HourCard.js';
import '../styles/Main.scss';
import TenDay from './TenDay.js';

const Main = props => {
  let sevenHrFcst = [];
  for (let i = 0; i < 7; i++) {
    sevenHrFcst.push(props.data.hourly_forecast[i]);
  }
  return (
    <div className="Main">
      <header className="header-wrapper">
        <h1>Tempestarii</h1>
        <h3 className="app-label">Weather Divination for the Modern Witch</h3>
        <input type="text" id="main-search" aria-label="city-search" placeholder="Search a different city"/>
      </header>
      <div className="main-wrapper">
        <header>
          <h2 className="city">{props.data.current_observation.display_location.full}</h2>
          <h3 className="date">{props.data.current_observation.observation_time}</h3>
        </header>
        <Weather current={props.data}/>
        <h2 className="seven-label">Seven Hour Divination</h2>
        <div className="seven-hr">
          {
            sevenHrFcst.map( (hour, index) => {
              return <HourCard key={index} fcst={hour}/>
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
            props.data.forecast.simpleforecast.forecastday.map((day, index) => {
              return <TenDay key={index} fcst={day}/>
            })
          }
        </div>
      </div>
      <footer>
      <p> &#169; Natelena 2018</p>
      </footer>
    </div>
  )
}

export default Main;