import { GET_DECKS, ADD_DECK } from '../actions'
import data from '../components/data'

const initialDecksState = {
  decks: data
};

function decks (state = initialDecksState, action) {
  switch (action.type) {
    case GET_DECKS:
    console.log('Getting decks: ', action.decks.json());
      return {
        ...state,
        ...action.decks.json(),
      }
    case ADD_DECK :
    console.log('Reducer> Adding deck: [', action.deck);
      return {
        ...state,
        decks: [...state.decks, action.deck]
      }

    default :
      return state
  }
}

export default decks