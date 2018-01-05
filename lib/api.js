import key from './apikey.js';

const apikey = key.apikey;
const root = 'http://api.wunderground.com/api';

//template! q is necessary
//http://api.wunderground.com/api/Your_Key/conditions/q/CA/San_Francisco.json
function apiGet (url) {
  // console.log(fetch(url).then( response => response.json() ))
  return fetch(url).then( response => response.json() );
}

apiGet(`${root}/${apikey}/conditions/forecast10day/hourly/q/CO/Denver.json`)

export default {
  getWeather(location) {
    return apiGet(`${root}/${apikey}/conditions/forecast10day/hourly/q/${location}.json`);
  }
}