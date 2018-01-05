import React from 'react';
import StartPage from './StartPage.js';
import Main from './Main.js';
import data from '../__mocks__/dataMock.js';
import api from './api.js';
import '../styles/App.scss';
// import CompleteMe from '@natbee/complete-me';

// console.log(CompleteMe)

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pageToggle: false
    }

    this.getWeather = this.getWeather.bind(this);
    this.onInitialSearch = this.onInitialSearch.bind(this);
  }

  componentDidMount() {
    this.getWeather('CO/Denver');
  }

  getWeather(location) {
    api.getWeather(location)
    .then(json => this.cleanData(json));
  }

  cleanData(jsonData) {
    let tenDayFcst = jsonData.forecast;
    let sevenHrFcst = [];

    for (let i = 0; i < 7; i++) {
      sevenHrFcst.push(jsonData.hourly_forecast[i]);
    };

    this.setState({
      currentObservation: jsonData.current_observation,
      forecast: tenDayFcst,
      hourlyForecast: sevenHrFcst
    })
  }

  // getWeather(location) {
  //   api.getWeather(location)
  //   .then(json => this.setState( { currentObservation: json.current_observation,
  //                                   forecast: json.forecast,
  //                                   hourlyForecast: json.hourly_forecast
  //                                 }, () => { this.cleanData() }));
  // }

  // cleanData() {
  //   let tenDayFcst = this.state.forecast;
  //   let sevenHrFcst = [];

  //   for (let i = 0; i < 7; i++) {
  //     sevenHrFcst.push(this.state.hourlyForecast[i]);
  //   };

  //   this.setState( {
  //     forecast: tenDayFcst,
  //     hourlyForecast: sevenHrFcst
  //   });
  // }

  onInitialSearch(clicked) {
    this.setState({pageToggle: !this.state.pageToggle});
  }

  render() {
    return (
      <div className='App'>
      {
        this.state.pageToggle ? 
        <Main data={this.state} /> :
        <StartPage onInitialSearch={this.onInitialSearch} />
      }
      </div>
    )
  }  
}