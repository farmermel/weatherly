import React from 'react';
import Search from './Search.js';
import '../styles/StartPage.scss';

const StartPage = props => {

  return (
    <div className="StartPage">
      <Search onInitialSearch={props.onInitialSearch}/>
    </div>
  )
}


export default StartPage;