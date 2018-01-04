import React from 'react';
import '../styles/Search.scss'

export default class StartPage extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   startDisplay: 'flex'
    // }

    // this.togglePage = this.togglePage.bind(this);
  }

  // togglePage() {
  //   this.setState({
  //     startDisplay: 'none'
  //   })
  //   console.log(this.state.startDisplay)
  // }

  render() {
    return (
      <section>
        <h1>Tempestarii</h1>
        <h3 className="app-label">Weather Divination for the Modern Witch</h3>
        <div className="input-wrap">
          <input className="searchCity" placeholder="Search Cities"></input>
          <button onClick={() => this.props.onInitialSearch(true)}>Go</button>
        </div>
      </section>
    )
  }
}
