import React from 'react';
import '../styles/HourCard.scss';
import '../styles/TenDay.scss';
  
let witchyHours = {
    0: 'Witching Hour',
    1: 'Hour of the Bat',
    2: 'Hour of the Wolf',
    3: 'Hour of the Cat',
    4: 'Hour of the Fae',
    5: 'Hour of the Cow',
    6: 'Hour of the Goat',
    7: 'Hour of the Bear',
    8: 'Hour of the Rat',
    9: 'Hour of the Hare',
    10: 'Hour of the Toad',
    11: 'Hour of the Hound',
    12: 'Hour of the Sheep',
    13: 'Hour of the Wasp',
    14: 'Hour of the Jackal',
    15: 'Hour of the Raven',
    16: 'Hour of the Beetle',
    17: 'Hour of the Caiman',
    18: 'Hour of the Fox',
    19: 'Hour of the Raccoon',
    20: 'Hour of the Possum',
    21: 'Hour of the Tortoise',
    22: 'Hour of the Moth',
    23: 'Hour of the Owl'
}

export default class WeatherCard extends React.Component {
  constructor(props) {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <section className={this.props.cardType}>
        {
          this.props.cardType === 'hour-card' ? <h3>{witchyHours[this.props.fcst.FCTTIME.hour]}</h3> :
          <h3>{this.props.fcst.date.weekday}</h3>
        }
        <img src={"../images/" + this.props.fcst.icon + ".svg"} className={this.props.cardType + '-icon'}/>
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