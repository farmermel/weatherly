import React from 'react';
import StartPage from './StartPage.js';
// import Weather from './Weather.js';
import Main from './Main.js';
import '../styles/App.scss';

const App = props => {
  return (
    <div className='App'>
      <StartPage />
      {/*<Main />*/}
    {/*Toggle view through display*/}
    </div>
  )
}

export default App;