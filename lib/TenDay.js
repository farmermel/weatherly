//Not in use---delete at some point

import React from 'react';
import '../styles/TenDay.scss';

const TenDay = props => {
  let weatherIcon = props.fcst.icon;
  return (
    <section className="TenDay">
      // <h3>{props.fcst.date.weekday}</h3>
      <img src={"../images/" + weatherIcon + ".svg"}/>
      // <h3>{props.fcst.high.fahrenheit}&#176;F</h3>
      // <h3>{props.fcst.low.fahrenheit}&#176;F</h3>
      console.log('waaaaaaaaa')
    </section>
  )
}

export default TenDay;