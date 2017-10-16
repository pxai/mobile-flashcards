import  Deck   from '../api';

export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'


export function getDecks (decks) {
  console.log('Calling to reducer... ', decks);
  return {
    type: GET_DECKS,
    decks
  }
}

export function getDecksAsync() {
  console.log('Calling getDecksAsync...');
  return dispatch => (
      Deck.getDecks().then(decks => dispatch(getDecks( decks)))
  )
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function addDeckAsync (deck) {
  console.log('Calling addDeckAsync...', deck);
  return dispatch => (
      //Deck.addDeck({deck, id:"decks"}).then(deck => dispatch(addDeck( deck)))
      dispatch(addDeck(Deck.addDeck({deck, id:"decks"})))
  )
}