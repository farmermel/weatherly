import React from 'react';
import '../styles/HourCard.scss';
import '../styles/TenDay.scss';
  
let witchyHours = {
    0: 'Witch',
    1: 'Bat',
    2: 'Wolf',
    3: 'Cat',
    4: 'Fae',
    5: 'Cow',
    6: 'Goat',
    7: 'Bear',
    8: 'Rat',
    9: 'Hare',
    10: 'Toad',
    11: 'Hound',
    12: 'Sheep',
    13: 'Wasp',
    14: 'Jackal',
    15: 'Raven',
    16: 'Beetle',
    17: 'Caiman',
    18: 'Fox',
    19: 'Raccoon',
    20: 'Possum',
    21: 'Tortoise',
    22: 'Moth',
    23: 'Owl'
}

export default class WeatherCard extends React.Component {
  constructor(props) {
    super();

    this.state = {
    }

    // this.fcst = this.props.fcst;
  }

  render() {

    return (
      <section className={this.props.cardType}>
        {
          this.props.cardType === 'hour-card' ? 
            <h3>Hour of <br /> the {witchyHours[this.props.fcst.FCTTIME.hour]}</h3> :
            <h3>{this.props.fcst.date.weekday}</h3>
        }
        <img src={"../images/" + this.props.fcst.icon + ".svg"}
             className={this.props.cardType + '-icon'} 
             alt={this.props.fcst.icon} />
        {
          this.props.cardType === 'hour-card' ? 
            <h3 className="hour-temp">{this.props.fcst.temp.english}&#176;F</h3> :
            (
            <div>
              <h3>{this.props.fcst.high.fahrenheit}&#176;F</h3>
              <h3>{this.props.fcst.low.fahrenheit}&#176;F</h3>
            </div>
            )
        }
      </section>
    )
  }
}