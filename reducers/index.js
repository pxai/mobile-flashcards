import { GET_DECKS, ADD_DECK, ADD_CARD } from '../actions'
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
    console.log('Reducer> Adding deck: []]]', action.deck);
      return {
        ...state,
        decks: [...state.decks, action.deck]
      }
      case ADD_CARD :
      console.log('Reducer> Adding card: []', action.deckId, action.card);
      return { 
        decks: state.decks.map( (elem) => {
          if(elem.id !== action.deckId) {
              // This isn't the item we care about - keep it as-is
              return elem;
          }
          
          // Otherwise, this is the one we want - return an updated value 
          // questions: elem.questions.push(action.card)
          return {
              ...elem,
              questions: [...elem.questions, action.card]
          };    
        })
      }

    default :
      return state
  }
}

export default decks