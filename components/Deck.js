import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Deck extends React.Component {
  render() {
    return (
      <View >
       <Text>{this.props.deck.title}</Text>
       <Text>{this.props.deck.questions.length} cards</Text>
      </View>
    );
  }
}