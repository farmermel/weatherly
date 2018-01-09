import React from 'react';
import WeatherCard from './WeatherCard.js';
import PropTypes from 'prop-types';

const SevenHour = props => {
  return (
    <div>
      <h2 className="seven-label">
        Seven Hour Divination
      </h2>
      <div className="seven-hr">
        {
          props.data.hourlyForecast &&
            props.data.hourlyForecast.map( (hour, index) => {
              return <WeatherCard key={ index } 
                                  cardType="hour-card" 
                                  fcst={ hour } />;
            })
        }
      </div>
    </div>
  );
};

SevenHour.propTypes = {
  data: PropTypes.object
};

export default SevenHour;