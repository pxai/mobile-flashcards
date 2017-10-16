import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';


class NewCard extends React.Component {
  render() {
    const deck = this.props.deck;

    return (
      <View >
       <Text> This is new Card dude, for deck {deck.title}</Text>
      </View>
    );
  }
}


function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params

  return {
    deckId,
    deck: state.data[deckId],
  }
}

function mapDispatchToProps (dispatch, { navigation }) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCard)