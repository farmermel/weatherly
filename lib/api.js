const root = 'http://wunderground.com';

function apiGet (url) {
  return fetch(url).then( response => response.json() );
}

export default {
  getWeather() {
    return apiGet(`${root}/weather.stuff`);
  }
}