import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Deck extends React.Component {
  render() {
    return (
      <View style={styles.deck}>
        <View><Text>{this.props.deck.title}</Text></View>
        <View><Text>{this.props.deck.questions.length} cards</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    borderBottomWidth: 2,
    height: 250,
    width: 400,
    marginLeft: 1,
    marginRight: 1,
  }
});