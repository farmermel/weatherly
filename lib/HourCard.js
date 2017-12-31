import React from 'react';
import '../styles/HourCard.scss';

const HourCard = props => {
  console.log(props.fcst.icon)
  let weatherIcon = props.fcst.icon;
  let witchyHours = {
    1: 'Hour of the Bat',
    2: 'Hour of the Wolf',
    3: 'Hour of the Cat',
    4: 'Hour of the Fae',
    5: 'Hour of the Cow',
    6: 'Hour ',
    7: 'Hour of the Bear',
    8: 'Hour of the Rat',
    9: 'Hour of the Hare',
    10: 'Hour of the Toad',
    11: 'Hour11',
    12: 'Hour of the Sheep',
    13: 'Hour of the Wasp',
    14: 'Hour of the Jackal',
    15: 'Hour of the Raven',
    16: 'Hour of the Beetle',
    17: 'Hour of the Caiman',
    18: 'Hour18',
    19: 'Hour19',
    20: 'Hour20',
    21: 'Hour21',
    22: 'Hour of the Moth',
    23: 'Hour23',
    24: 'Witching Hour'
  }

  return (
    <section className="hour-card">
      <h3>{witchyHours[props.fcst.FCTTIME.hour]}</h3>
      <img src={"../images/" + weatherIcon + ".svg"} className="current-weather-icon"/>

      <h3>Tempest</h3>

    </section>
  )
}

export default HourCard;