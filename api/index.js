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
  
  
/*
 this.addDeck = function ({ deck, key }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
 }*/

}


export default new Deck();