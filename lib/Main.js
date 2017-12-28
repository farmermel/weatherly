import React from 'react';
import Weather from './Weather.js';
import SevenHour from './SevenHour.js';
import '../styles/Main.scss';

const Main = props => {
  return (
    <div className="Main">
      {/*search bar here*/}
      <h1>Tempestarii</h1>
      <div>
        <h2 className="city">Minneapolis</h2>
        <Weather />
        <SevenHour />
      </div>
    </div>
  )
}

export default Main;