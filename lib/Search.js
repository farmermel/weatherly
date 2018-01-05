import React from 'react';
import '../styles/Search.scss'

export default class StartPage extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onChange()

  //first console.log the text input
  //once we can access text input pass that to get Weather function
  //which will be passed from app

  onClick() {
    this.props.onInitialSearch(true);
  }

  render() {
    return (
      <section>
        <div className="input-wrap">
          <input className="searchCity" placeholder="Search Cities"></input>
          <button onClick={this.onClick}>Go</button>
        </div>
      </section>
    )
  }
}
