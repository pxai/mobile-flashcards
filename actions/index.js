
import  DeckStorage   from '../flashcard';
export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function getDecks (decks) {
  console.log('Calling to reducer... ', decks);
  return {
    type: GET_DECKS,
    decks
  }
}

export function getDecksAsync() {
  return dispatch => (
    DeckStorage.getDecks().then(decks => dispatch(getDecks( decks)))
  )
}

export function addDeck (deckTitle) {
  return {
    type: ADD_DECK,
    deckTitle
  }
}

export function addCard (deckId, card) {
  return {
    type: ADD_CARD,
    card,
    deckId
  }
}


export function addDeckAsync (deck) {
  console.log('Calling addDeckAsync...', deck);
  Deck.getDecks().then(decks => console.log('JODER: ', decks));
  
  /*return dispatch => (
    addDeck(deck)
      //Deck.addDeck({deck, id:"decks"}).then(deck => dispatch(addDeck( deck)))
      //Deck.addDeck({key: deck.id, entry: { id: deck.id, title: deck.title, questions: [] } }).then(addDeck(deck))
  )*/
}