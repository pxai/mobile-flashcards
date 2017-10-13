import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import data  from './data.js'
import Deck from './Deck'

//const decks = data;

export default class Decks extends React.Component {
  render() {
      const decks = data;
    return (
      <View>
          {decks.map((deck) =>
           {
            return <Deck key={deck.title} deck={deck} />
           }
       )}
      </View>
    );
  }
}