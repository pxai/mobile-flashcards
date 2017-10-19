import { AsyncStorage } from 'react-native'
import data from '../components/data'

export const DECKS_STORAGE_KEY = '@UdaciCards:deck'
/*try {
 AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data)).then(console.log('Async storage READY!'));
 
} catch (error) {0
  console.log('Could not set AsyncStorage: ', error);
}*/

const Deck = function () {

 this.getDecks = function () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY);
  }
  
 this.addDeck = function ({ key, entry }) {
   console.log('API> Action add key and deck', key, entry);
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
   [key]: entry
  }));

      /* AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(deck),  () => { 
            AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck), () => { 
                AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => { console.log(result); }); 
              }); 
          });
        */  
          return deck;
 }

 this.initStorage = function () {
  console.log('Init local storage');
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))  
 }
}


export default new Deck();