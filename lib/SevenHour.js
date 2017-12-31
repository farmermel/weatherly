import React from 'react';
import HourCard from './HourCard.js';

const SevenHour = props => {
  console.log('sevenhr', props)
  return (
    <section>
      <HourCard fcst={props}/>
    </section>
  )
}



export default SevenHour;