import React from 'react';
import PropTypes from 'prop-types';
import '../styles/HourCard.scss';
import '../styles/TenDay.scss';
  
let witchyHours = [
  'Witch',
  'Bat',
  'Wolf',
  'Cat',
  'Fae',
  'Cow',
  'Goat',
  'Bear',
  'Rat',
  'Hare',
  'Toad',
  'Hound',
  'Sheep',
  'Wasp',
  'Jackal',
  'Raven',
  'Beetle',
  'Caiman',
  'Fox',
  'Raccoon',
  'Possum',
  'Tortoise',
  'Moth',
  'Owl'
];

export default class WeatherCard extends React.Component {
  constructor() {
    super();

  }

  render() {
    let { fcst } = this.props;

    return (
      <section className={this.props.cardType}>
        {
          this.props.cardType === 'hour-card' ? 
            <h3>
              Hour of <br /> the { witchyHours[fcst.FCTTIME.hour] }
            </h3> :
            <h3>
              { fcst.date.weekday }
            </h3>
        }
        <img src={"../images/" + fcst.icon + ".svg"}
             className={this.props.cardType + '-icon'} 
             alt={fcst.icon} />
        {
          this.props.cardType === 'hour-card' ? 
            <h3 className="hour-temp">
              { fcst.temp.english }&#176;F
            </h3> :
            (
            <div>
              <h3>
                { fcst.high.fahrenheit }&#176;F
              </h3>
              <h3>
                { fcst.low.fahrenheit }&#176;F
              </h3>
            </div>
            )
        }
      </section>
    );
  }
}

WeatherCard.propTypes = {
  cardType: PropTypes.string,
  fcst: PropTypes.object
};