import { GET_DECKS, ADD_DECK, ADD_CARD } from '../actions'
import data from '../components/data'
import  DeckStorage   from '../flashcard';

DeckStorage.initStorage();


const initialDecksState = {
  decks: data
};

function decks (state = initialDecksState, action) {

  switch (action.type) {
    case GET_DECKS:
    console.log('Getting decks: ', action.decks.json());
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK :
     DeckStorage.addDeck({key: action.deckTitle, entry: {title: action.deckTitle, questions: []}});
      console.log('Reducer> Adding deck: []]]', action.deckTitle);
        return { decks: {
          ...state.decks,
          [action.deckTitle]: {
            title: action.deckTitle,
            questions: [],
          }
        }
      }
    case ADD_CARD :
      console.log('Reducer> Adding card: []', action.deckId, action.card);
      console.log('STATE IS: ', state.decks[action.deckId])
      return {  decks: {
          ...state.decks,
          [action.deckId] : {
            title: action.deckId,
            questions: [action.card, ...state.decks[action.deckId].questions]
          }
        }
      }
    default :
      return state
  }
}

export default decks