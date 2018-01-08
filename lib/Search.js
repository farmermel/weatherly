import React from 'react';
import Suggestion from './Suggestion.js'
import trie from './AutoComplete.js'
import '../styles/Search.scss'

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {

    }

    this.onSelect = this.onSelect.bind(this);
    this.onInitialSearch = this.onInitialSearch.bind(this);
  }

  onInitialSearch() {
    let locationUnedited = this.state.textInput;
    console.log(locationUnedited)

    if (typeof this.state.textInput === 'string') {
      let locArr = locationUnedited.split(', ');
      let location = locArr[1] + '/' + locArr[0];
      console.log(location)
      this.props.getWeather(location);
    } else if (typeof this.state.textInput === 'number') {
      this.localStorage(location);
      this.props.getWeather(location);
    }
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
    document.querySelector('.searchCity').value = place;
    this.setState({ 
      textInput: place,
      suggestions: []
    })
    trie.select(place);
  }

  render() {
    return (
      <section>
        <div className="input-wrap">
          <input className="searchCity" 
                 placeholder="Search Cities" 
                 onChange={ (e) => this.onType(e) }></input>
          <button onClick={ () => this.onInitialSearch() }>Go</button>
          <div className="suggest-wrapper">
          {
            this.state.suggestions &&
            this.state.suggestions.map( (suggestion, index) => {
              return <Suggestion place={suggestion} 
                                 onSelect={this.onSelect} 
                                 key={index} />
            })
          }
          </div>
        </div>
      </section>
    )
  }
}