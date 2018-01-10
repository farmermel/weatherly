import React from 'react';
import WeatherCard from './WeatherCard.js';
import PropTypes from 'prop-types';

const TenDay = props => {
  let { forecastday } = props.data.simpleforecast;
  
  return (
    <div>
      <h2 className="ten-label">
        Ten Day Divination
      </h2>
      <section className="ten-day-header">
        <h3>Day</h3>
        <h3>Condition</h3>
        <h3>High</h3>
        <h3>Low</h3>
      </section>
      <div className="ten-day-wrapper">
        {
          props.data && 
              forecastday.map((day, index) => {
                return (<WeatherCard cardType="TenDay" 
                                    key={ index } 
                                    fcst={ day } />);
              })
        }
      </div>
    </div>
  );
};

TenDay.propTypes = {
  data: PropTypes.object
};

export default TenDay;