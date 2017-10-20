import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View , TextInput} from 'react-native';
import { addCard } from '../actions'
import TextButton from './TextButton'

class NewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question: '', answer: '' };
  }

  addCard = () => {
    
        let newCard = {
          question: this.state.question,
          answer: this.state.answer,
          correct: null
        };
        console.log('Adding card', newCard);
        this.props.addCard( this.props.deck.id , newCard);

        this.props.goBack(); 
      };

  render() {
    const deck = this.props.deck;

    return (
      <View style={styles.deck}>
      <View style={styles.box}><Text>Add new Card</Text></View>

      <View style={styles.box}>
        <Text>Question</Text>
        <TextInput maxLength={40} 
        onChangeText={(question) => this.setState({question})}
        value={this.state.question} />
      </View>

      <View style={styles.box}>
        <Text>Answer</Text>
        <TextInput maxLength={40} 
        onChangeText={(answer) => this.setState({answer})}
        value={this.state.answer} />
      </View>
      <View style={styles.box}>
      <TextButton style={styles.default} 
      onPress={this.addCard}>
          Add Deck
      </TextButton>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    alignItems: 'stretch',
    marginLeft: 1,
    marginRight: 1,
  },
  box: {
    alignItems: 'center',
    height: 50,
    margin: 10,
  },
  default: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#aaa',
    padding: 4
  }
})


function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params

  return {
    deckId,
    deck:  state.decks.filter(d => d.id === deckId)[0],
  }
}

function mapDispatchToProps (dispatch, { navigation }) {
  return {
    addCard: (deckId, card) => dispatch(addCard(deckId, card)),
    goBack: () => navigation.goBack()
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCard)