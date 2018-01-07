import React from 'react';
import Search from './Search.js';
import '../styles/StartPage.scss';

const StartPage = props => {
  console.log(props)
  return (
    <div className="StartPage">
      <h1>Tempestarii</h1>
      <h3 className="app-label">Weather Divination for the Modern Witch</h3>
      {
        props.data.suggestions ? <Search onInitialSearch={props.onInitialSearch} onType={props.onType} suggestions={props.data.suggestions}/> :
        <Search onInitialSearch={props.onInitialSearch} onType={props.onType} onSelect={props.onSelect} />
      }
    </div>
  )
}

export default StartPage;