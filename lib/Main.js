import React, {Component} from 'react';
import Weather from './Weather.js';
//not currently using SevenHour for anything
// import SevenHour from './SevenHour.js';
import HourCard from './HourCard.js';
import '../styles/Main.scss';

const Main = props => {
  let sevenHrFcst = [];
  for (let i = 0; i < 7; i++) {
    sevenHrFcst.push(props.data.hourly_forecast[i]);
  }
  return (
    <div className="Main">
      {/*search bar here*/}
      <h1>Tempestarii</h1>
      <h3>Weather Divination for the Modern Witch</h3>
      <div className="main-wrapper">
        <h2 className="city">{props.data.current_observation.display_location.full}</h2>
        <Weather current={props.data}/>
        <h3 className="seven-label">Seven Hour Divination</h3>
        <div className="seven-hr">
          {
            sevenHrFcst.map( hour => {
              return <HourCard fcst={hour}/>
            })
          }
        </div>
        {/*<SevenHour />*/}
      </div>
    </div>
  )
}

export default Main;