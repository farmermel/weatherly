import React from 'react';
import '../styles/Search.scss'

const StartPage = props => {
  return (
    <section>
      <h1>Tempestarii</h1>
      <h3>Weather Divination for the Modern Witch</h3>
      <div className="input-wrap">
        <input className="searchCity" placeholder="Search Cities"></input>
        <button>Go</button>
      </div>
    </section>
  )
}


export default StartPage;