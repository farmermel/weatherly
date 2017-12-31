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
      <h1>Tempestarii</h1>
      <h3 className="app-label">Weather Divination for the Modern Witch</h3>
      <input type="text" id="main-search" aria-label="city-search" placeholder="Search a different city"/>
      <div className="main-wrapper">
        <h2 className="city">{props.data.current_observation.display_location.full}</h2>
        <Weather current={props.data}/>
        <h3 className="seven-label">Seven Hour Divination</h3>
        <div className="seven-hr">
          {
            sevenHrFcst.map( (hour, index) => {
              return <HourCard key={index} fcst={hour}/>
            })
          }
        </div>
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
    </div>
  )
}

export default Main;