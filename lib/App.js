import React from 'react';
import StartPage from './StartPage.js';
// import Weather from './Weather.js';
import Main from './Main.js';
import '../styles/App.scss';
import data from '../__mocks__/dataMock.js';

const App = props => {
  return (
    <div className='App'>
      {/*<StartPage />*/}
      <Main data={data}/>
    {/*Toggle view through display*/}
    </div>
  )
}

export default App;