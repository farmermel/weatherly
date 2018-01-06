import React from 'react';
import Search from './Search.js';
import '../styles/StartPage.scss';

const StartPage = props => {

  return (
    <div className="StartPage">
      <h1>Tempestarii</h1>
      <h3 className="app-label">Weather Divination for the Modern Witch</h3>
      <Search onInitialSearch={props.onInitialSearch} onType={props.onType}/>
    </div>
  )
}

export default StartPage;