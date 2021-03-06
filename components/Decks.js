import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
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
      <ScrollView contentContainerStyle={styles.deck}>
          {Object.keys(decks).map((key, index) =>
           {
            return (
              <TouchableOpacity
                onPress={() => 
                this.props.navigation.navigate(
                  'DeckDetail',
                  { deckId: key }
                )}
              >
               <Deck key={decks[key].title} deck={decks[key]} />
              </TouchableOpacity>
              )
           }
       )}
      </ScrollView>
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
  console.log('Loading this deck: ', state.decks);
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