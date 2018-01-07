import React from 'react';
import StartPage from './StartPage.js';
import Main from './Main.js';
import data from '../__mocks__/dataMock.js';
import api from './api.js';
import trie from './AutoComplete.js'
import '../styles/App.scss';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pageToggle: false
    }
    
    this.getWeather = this.getWeather.bind(this);
    this.onInitialSearch = this.onInitialSearch.bind(this);
    this.onType = this.onType.bind(this);
    this.onBackToHome = this.onBackToHome.bind(this);
    this.onSelect = this.onSelect.bind(this);
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

  onInitialSearch() {
    this.setState({ pageToggle: true });

    let locationUnedited = this.state.textInput;

    if (typeof this.state.textInput === 'string') {
      let locArr = locationUnedited.split(', ')
      let location = locArr[1] + '/' + locArr[0];
      this.getWeather(location);
    } else if (typeof this.state.textInput === 'number') {
      this.localStorage(location);
      this.getWeather(location);
    }
  }

  onBackToHome() {
    localStorage.clear();
    this.setState({ pageToggle: false });
  }

  autoComplete(prefix) {
    let autoArr = trie.suggest(prefix);
    this.setState({
      suggestions: autoArr
    })
  }

  onType(e) {
    this.autoComplete(e.target.value);
    this.setState({
      textInput: e.target.value
    })
  }

  onSelect(place) {
    this.setState({
      textInput: place
    })
  }

  render() {

    return (
      <div className='App'>
      {
        this.state.pageToggle ? 
        <Main data={this.state} onInitialSearch={this.onInitialSearch} onType={this.onType} onBackToHome={this.onBackToHome} onSelect={this.onSelect} /> :
        <StartPage data={this.state} onInitialSearch={this.onInitialSearch} onType={this.onType} onSelect={this.onSelect} />
      }
      </div>
    )
  }  
}