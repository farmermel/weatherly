import React from 'react';
import StartPage from './StartPage.js';
import Main from './Main.js';
import data from '../__mocks__/dataMock.js';
import api from './api.js';
import '../styles/App.scss';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pageToggle: false
    }
    
    this.getWeather = this.getWeather.bind(this);
    this.onBackToHome = this.onBackToHome.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('storedLocation')) {
      this.setState({
        pageToggle: true
      })
      let oldLocation = localStorage.getItem('storedLocation');
      this.getWeather(oldLocation);
    }
  }

  getWeather(location) {
    console.log(location)
    this.setState({ pageToggle: true });
    api.getWeather(location)
    .then(json => {
      this.cleanData(json)
      localStorage.setItem('storedLocation', location)
    });
  }

  cleanData(jsonData) {
    if (!jsonData.forecast) {
      this.setState({        
        currentObservation: null,
        forecast: null,
        hourlyForecast: null,
        moonPhase: null,
        error: jsonData.response.error.description || null
      })
    } else {
      let tenDayFcst = jsonData.forecast;
      let sevenHrFcst = [];

      for (let i = 0; i < 7; i++) {
        sevenHrFcst.push(jsonData.hourly_forecast[i]);
      };
      this.setState({
        currentObservation: jsonData.current_observation,
        forecast: tenDayFcst,
        hourlyForecast: sevenHrFcst,
        moonPhase: jsonData.moon_phase,
        error: null
      })
    }
  }

  onBackToHome() {
    localStorage.clear();
    this.setState({ pageToggle: false });
  }

  render() {
    return (
      <div className='App'>
      {
        this.state.pageToggle ? 
        <Main data={this.state}  
              onBackToHome={this.onBackToHome}
              getWeather={this.getWeather} /> :
        <StartPage data={this.state}
                   getWeather={this.getWeather} />
      }
      </div>
    )
  }  
}