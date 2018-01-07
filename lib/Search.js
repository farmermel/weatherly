import React from 'react';
import Suggestion from './Suggestion.js'
import '../styles/Search.scss'

export default class StartPage extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onType(e);
  }

  onClick() {
    this.props.onInitialSearch();
  }

  render() {
    console.log(this.props.onSelect)
    return (
      <section>
        <div className="input-wrap">
          <input className="searchCity" placeholder="Search Cities" onChange={this.onChange}></input>
          <button onClick={this.onClick}>Go</button>
          {
            this.props.suggestions &&
            this.props.suggestions.map( (suggestion, index) => {
              return <Suggestion place={suggestion} onSelect={this.props.onSelect} key={index} />
            })
          }
        </div>
      </section>
    )
  }
}