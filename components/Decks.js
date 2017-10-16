import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getDecksAsync } from '../actions'
import data  from './data.js'
import Deck from './Deck'
import DeckDetail from './DeckDetail'

//const decks = data;

class Decks extends React.Component {
  componentDidMount() {
    this.props.getDecks()
   console.log('Got decks...', this.props.decks);
  }

  render() {
      const decks = this.props.decks;
    return (
      <View style={styles.decks}>
          {decks.map((deck) =>
           {
            return (
              <TouchableOpacity
                onPress={() => 
                this.props.navigation.navigate(
                  'DeckDetail',
                  { deckId: deck.id }
                )}
              >
               <Deck key={deck.title} deck={deck} />
              </TouchableOpacity>
              )
           }
       )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  decks: {
    flex: 1,
    justifyContent: 'flex-start',
    borderBottomColor: '#eee' ,
    alignItems: 'stretch'
  }
});

function mapStateToProps (state, { navigation }) {
  return {
    decks: state.decks,
  }
}

function mapDispatchToProps (dispatch, { navigation }) {
  return {
    getDecks: () => dispatch(getDecksAsync()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Decks)