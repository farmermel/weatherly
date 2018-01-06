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
    this.onType = this.onType.bind(this);

  }

  // componentDidMount() {
  //   this.getWeather('CO/Denver');
  // }
  //use on Main page? when taking data from local storage to render most recent data

  getWeather(location) {
    api.getWeather(location)
    .then(json => this.cleanData(json));
  }

  cleanData(jsonData) {
    console.log(jsonData)
    if(!jsonData.forecast) {
      this.setState({
        error: jsonData.response.error.description || null
      })
    } else {
      let tenDayFcst = jsonData.forecast;
      let sevenHrFcst = [];

      for (let i = 0; i < 7; i++) {
        sevenHrFcst.push(jsonData.hourly_forecast[i]);
      };
      console.log(jsonData)
      this.setState({
        currentObservation: jsonData.current_observation,
        forecast: tenDayFcst,
        hourlyForecast: sevenHrFcst,
      })
    }
  }

  onInitialSearch() {
    this.setState({pageToggle: !this.state.pageToggle});
    let locationUnedited = this.state.textInput;

    if (typeof this.state.textInput === 'string') {
      let locArr = locationUnedited.split(', ')
      let location = locArr[1] + '/' + locArr[0];
      this.getWeather(location);
    } else if (typeof this.state.textInput === 'number') {
      this.getWeather(location);
    }
  }

  onType(e) {
    this.setState({
      textInput: e.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className='App'>
      {
        this.state.pageToggle ? 
        <Main data={this.state} /> :
        <StartPage onInitialSearch={this.onInitialSearch} onType={this.onType} />
      }
      </div>
    )
  }  
}