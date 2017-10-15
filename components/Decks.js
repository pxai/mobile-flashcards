import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import data  from './data.js'
import Deck from './Deck'
import DeckDetail from './DeckDetail'

//const decks = data;

export default class Decks extends React.Component {
  render() {
      const decks = data;
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