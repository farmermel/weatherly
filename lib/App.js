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
      this.getWeather(location);
    }
  }

  autoComplete(text) {
    // if(this.state.textInput) {
      let cityPrefix = text;
      // let autoArr = trie.suggest(cityPrefix);   
      // this.setState({
      //   autoArr: autoArr
      // })
    // }
    let autoArr = trie.suggest('De');
    console.log(typeof text);
    console.log(autoArr);
  }

  onType(e) {
    this.autoComplete(e.target.value);
    this.setState({
      textInput: e.target.value
    });
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