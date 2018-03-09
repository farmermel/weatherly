import key from './apikey.js';

const root = 'http://api.wunderground.com/api';
const call = 'conditions/forecast10day/hourly/astronomy/q';

function apiGet (url) {
  return fetch(url).then( response => response.json() );
}

export default {
  getWeather(location) {
    return apiGet(`${root}/${key}/${call}/${location}.json`);
  }
};