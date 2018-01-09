import React from 'react';
import Weather from './Weather.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import Search from './Search.js';
import MoonPhase from './MoonPhase.js';
import crystalBall from '../images/crystal-ball.gif';
import PropTypes from 'prop-types';
import '../styles/Main.scss';

const Main = props => {
  return (
    <div className="Main">
      <header className="header-wrapper">
        <button className="home" 
                onClick={ props.onBackToHome }>
          Back to Home
        </button>
        <h1>
          Tempestarii
        </h1>
        <h3 className="app-label">
          Weather Divination for the Modern Witch
        </h3>
        <Search getWeather={ props.getWeather } />
      </header>
        {
          props.data.currentObservation ?
          <div className="main-wrapper">
            <header>
              <h2 className="city">
                { props.data.currentObservation.display_location.full }
              </h2>
              <h3 className="date">
                { props.data.currentObservation.observation_time }
              </h3>
            </header>
            <Weather current={ props.data } />
            <SevenHour data={ props.data } />
            <TenDay data={ props.data.forecast } />
            <h2>
              Moon Phase Divination
            </h2>
            <MoonPhase phase={ props.data.moonPhase } 
                       className="moon-label" />
          </div>
          : (
              props.data.error ? 
                <h3 className="error">{ props.data.error }</h3> : 
                <img src={crystalBall} 
                     alt="loading..." />
            )
        }
      <footer>
        <p>&#169; Natelena 2018</p>
      </footer>
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  getWeather: PropTypes.func,
  onBackToHome: PropTypes.func,
  data: PropTypes.object,
  currentObservation: PropTypes.object
};

export default Main;