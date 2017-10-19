import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';


class StartQuiz extends React.Component {
  render() {
    const deck = this.props.deck;
    
    return (
      <View >
       <Text> This is the start of the quiz for {deck.title}</Text>
      </View>
    );
  }
}


function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params

  return {
    deckId,
    deck:  state.decks.filter(d => d.id === deckId)[0],
  }
}

function mapDispatchToProps (dispatch, { navigation }) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StartQuiz)