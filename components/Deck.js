import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Deck extends React.Component {
  render() {
    return (
      <View style={styles.deck}>
        <View>
          <Text style={styles.title}>{this.props.deck.title}</Text>
        </View>
        <View style={styles.number}>
          <Text>{this.props.deck.questions.length} cards</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  deck: {
    borderBottomWidth: 1,
    textAlign: 'center',
    height: 250,
    marginLeft: 1,
    marginRight: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  number: {
    fontSize: 10
  }
});