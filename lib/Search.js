import React from 'react';
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
    return (
      <section>
        <div className="input-wrap">
          <input className="searchCity" placeholder="Search Cities" onChange={this.onChange}></input>
          <button onClick={this.onClick}>Go</button>
        </div>
      </section>
    )
  }
}