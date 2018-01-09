import React from 'react';
import Suggestion from './Suggestion.js';
import trie from './AutoComplete.js';
import PropTypes from 'prop-types';
import '../styles/Search.scss';

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      textInput: ''
    };

    this.onSelect = this.onSelect.bind(this);
    this.onInitialSearch = this.onInitialSearch.bind(this);
  }

  onInitialSearch() {
    let locationUnedited = this.state.textInput;

    if (typeof this.state.textInput === 'string') {
      let locArr = locationUnedited.split(', ');
      let location = locArr[1] + '/' + locArr[0];

      this.props.getWeather(location);
    } 
  }

  autoComplete(prefix) {
    let autoArr = trie.suggest(prefix);

    this.setState({
      suggestions: autoArr
    });
  }

  onType(e) {
    this.autoComplete(e.target.value);
    this.setState({
      textInput: e.target.value
    });
  }

  onSelect(place) {
    this.setState({ 
      textInput: place,
      suggestions: []
    });
    trie.select(place);
  }

  render() {
    return (
      <section>
        <div className="input-wrap">
          <input className="searchCity" 
                 placeholder="Search Cities" 
                 value={ this.state.textInput }
                 onChange={ (e) => this.onType(e) }></input>
          <button onClick={ () => this.onInitialSearch() }>
            Go
          </button>
          <div className="suggest-wrapper">
          {
            this.state.suggestions &&
            this.state.suggestions.map( (suggestion, index) => {
              return (<Suggestion place={ suggestion } 
                                 onSelect={ this.onSelect } 
                                 key={ index } />);
            })
          }
          </div>
        </div>
      </section>
    );
  }
}

Search.propTypes = {
  getWeather: PropTypes.func
};