import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import data  from './data.js'

export default class DeckDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params
  
   // setState({deck: data[deckId]})
  }
  render() {
   const deck = data[this.props.navigation.state.params.deckId];
   console.log('State: ', deck);
    return (
      <View style={styles.deck}>
        <View><Text>{deck.title}</Text></View>
        <View><Text>So many cards</Text></View>
      </View>
    );
  }
}

function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params

  return {
    deckId,
    deck: data[deckId],
  }
}


const styles = StyleSheet.create({
  deck: {
    borderBottomWidth: 2,
    height: 200,
    width: '100%',
    marginLeft: 1,
    marginRight: 1,
  }
});