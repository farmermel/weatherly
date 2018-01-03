import React from 'react';
import StartPage from './StartPage.js';
// import Weather from './Weather.js';
import Main from './Main.js';
import '../styles/App.scss';
import data from '../__mocks__/dataMock.js';
import api from './api.js';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      weatherData: {}
    }

    this.getWeather = this.getWeather.bind(this)
  }

  getWeather() {
    api.getWeather()
    .then(json => this.setState( {weatherData: json.results}))
  }

  render() {

    return (
      <div className='App'>
        {/*<StartPage />*/}
        <Main data={data}/>
      {/*Toggle view through display*/}
      </div>
    )
  }  
}