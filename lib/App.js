import React from 'react';
import StartPage from './StartPage.js';
// import Weather from './Weather.js';
import Main from './Main.js';
import '../styles/App.scss';
import data from '../__mocks__/dataMock.js';
import api from './api.js';
// import CompleteMe from '@natbee/complete-me';

// console.log(CompleteMe)

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // weatherData: {},
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
    .then(json => this.setState( { currentObservation: json.current_observation,
                                    forecast: json.forecast,
                                    hourlyForecast: json.hourly_forecast
                                  }, () => { this.cleanData() }));
  }

  cleanData() {
    let tenDayFcst = this.state.forecast.simpleforecast.forecastday;
    let sevenHrFcst = [];

    for (let i = 0; i < 7; i++) {
      sevenHrFcst.push(this.state.hourlyForecast[i]);
    };

    this.setState( {
      forecast: tenDayFcst,
      hourlyForecast: sevenHrFcst
    });
  }

  onInitialSearch(clicked) {
      //this.state consolelogs false
      //this consolelogs with state true
      //WHYYYYYY

    this.setState({pageToggle: !this.state.pageToggle});
  }

  render() {
    console.log(this.state)
    return (
      <div className='App'>
      {
        this.state.pageToggle ? 
        <Main data={this.state} /> :
        <StartPage onInitialSearch={this.onInitialSearch} />
      }
        {/*<StartPage onInitialSearch={this.onInitialSearch}/>*/}
        {/*<Main data={data}/>*/}
      {/*Toggle view through display*/}
      </div>
    )
  }  
}