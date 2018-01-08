import cities from '../__mocks__/cityList.js';
import { Trie } from '@natbee/complete-me';

let trie = new Trie();

cities.data.forEach(city => {
  trie.insert(city);
});

export default trie;