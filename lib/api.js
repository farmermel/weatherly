import key from './apikey.js';

const apikey = key.apikey;
const root = 'http://api.wunderground.com/api';

function apiGet (url) {
  return fetch(url).then( response => response.json() );
}

export default {
  getWeather(location) {
    return apiGet(`${root}/${apikey}/conditions/forecast10day/hourly/astronomy/q/${location}.json`);
  }
};