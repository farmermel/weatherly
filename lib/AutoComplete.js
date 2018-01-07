import cities from '../__mocks__/cityList.js';
const Trie = require('../node_modules/@natbee/complete-me/scripts/CompleteMeTrie.js');

let trie = new Trie();

cities.data.forEach(city => {
  trie.insert(city);
})

export default trie;