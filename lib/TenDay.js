import React from 'react';
import '../styles/TenDay.scss';

const TenDay = props => {
  console.log("Hi Ten day")
  let weatherIcon = props.fcst.icon;
  return (
    <section className="TenDay">
      <h3>{props.fcst.date.weekday}</h3>
      <img src={"../images/" + weatherIcon + ".svg"}/>
      <h3>{props.fcst.high.fahrenheit}</h3>
      <h3>{props.fcst.low.fahrenheit}</h3>
    </section>
  )
}

export default TenDay;