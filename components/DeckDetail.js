import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import Deck from './Deck';
import TextButton from './TextButton';

class DeckDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params
  
   // setState({deck: data[deckId]})
  }
  addCard = () => {
    console.log('Button add was pressed', this.props.deckId );
    this.props.navigation.navigate(
      'NewCard',
      { deckId: this.props.deckId }
    )
  }
  startQuiz = () => {
    console.log('Button start was pressed',  this.props.deckId );
    this.props.navigation.navigate(
      'StartQuiz',
      { deckId: this.props.deckId }
    )
  }
  render() {
   // Other option to access param:
   // this.props.navigation.state.params.deckId;
   
   const deck = this.props.deck; 
   console.log('Detail deck: ', this.props.deckId);
    return (
      <View style={styles.deck}>
        <Deck deck={deck} />
        <View style={styles.box}>        
          <TextButton style={styles.addButton} onPress={this.addCard}>
            Add Card
          </TextButton>
        </View>
        <View style={styles.box}>   
          <TextButton style={styles.startButton} onPress={this.startQuiz}>
            Start Quiz
          </TextButton>
        </View>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  deck: {
    flex: 1,
    width: '100%',
    marginLeft: 1,
    marginRight: 1,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButton: {
    textAlign: 'center',
    margin: 2,
    padding: 4,
    borderWidth: 1,
    borderColor: '#000',
    width: 150
  },
  startButton: {
    textAlign: 'center',
    margin: 2,
    padding: 4,
    borderWidth: 1,
    borderColor: '#000',
    width: 150,
    backgroundColor: '#000',
    color: '#fff'
  }
});

function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params
  console.log('Loading this deck: ', deckId);
  return {
    navigation,
    deckId,
    deck: state.decks.filter(d => d.id === deckId)[0],
  }
}

function mapDispatchToProps (dispatch, { navigation }) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckDetail)