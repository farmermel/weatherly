import React from 'react';
import '../styles/Weather.scss';

const Weather = props => {
  return (
    <article className="Weather">
      <section>
        <h3>Now</h3>
        <h1>33*</h1>
      </section>
      <article className="extremes">
        <section>
          <h4>High</h4>
          <h2>40*</h2>
        </section>
        <section>
          <h4>Low</h4>
          <h2>28*</h2>
        </section>
      </article>
    </article>
  )
}

export default Weather;