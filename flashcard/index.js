import { AsyncStorage } from 'react-native'
import data from '../components/data'

export const DECKS_STORAGE_KEY = '@UdaciCards:deck'


const DeckStorage = function () {

 this.getDecks = function () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(decks => JSON.parse(decks))
  }

  this.getDeck = function (id) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((decks) => {
      return JSON.parse(decks[id])
    })
  }
  
  this.saveDeckTitle = function (id) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
      [id]: { title: id, questions: [] }
    }))
  };

  this.addCardToDeck = function(id, question) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
      .then((result) => {
        const decks = JSON.parse(result);
        decks[id].questions.push(question);
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
      })
  };

 this.initStorage = function () {
  console.log('Init local storage');
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))  
 }
}


export default new DeckStorage();