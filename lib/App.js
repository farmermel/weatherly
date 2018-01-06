import React from 'react';
import StartPage from './StartPage.js';
import Main from './Main.js';
import data from '../__mocks__/dataMock.js';
import api from './api.js';
import trie from './AutoComplete.js'
import '../styles/App.scss';
console.log(trie);
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

  componentDidMount() {
    if(localStorage.getItem('storedLocation')) {
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
    console.log(jsonData)
    if(!jsonData.forecast) {
      this.setState({        
        currentObservation: null,
        forecast: null,
        hourlyForecast: null,
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
        error: null
      })
    }
  }

  onInitialSearch() {
    this.setState({pageToggle: true});
    //later we can add a button that will toggle back to false to go to main page

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

  autoComplete() {
    if(this.state.textInput) {
      console.log(typeof this.state.textInput);
      let cityPrefix = this.state.textInput;
      let autoArr = trie.suggest(cityPrefix);
      console.log(cityPrefix)
      console.log(autoArr)
    }
  }

  onType(e) {
    this.setState({
      textInput: e.target.value
    })
    this.autoComplete();
  }

  render() {
    console.log(this.state)
    return (
      <div className='App'>
      {
        this.state.pageToggle ? 
        <Main data={this.state} onInitialSearch={this.onInitialSearch} onType={this.onType} /> :
        <StartPage onInitialSearch={this.onInitialSearch} onType={this.onType} />
      }
      </div>
    )
  }  
}