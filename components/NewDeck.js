import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { addDeckAsync } from '../actions'
import { getDecks } from '../api'
import TextButton from './TextButton'


class NewDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deckName: '' };
  }

  addDeck = () => {

    let newDeck = {
      id: Math.round(Math.random()*100),
      title: this.state.deckName,
      questions: []
    };
    console.log('Adding Deck', newDeck);
    this.props.addDeck(newDeck);
  };

  render() {
    return (
      <View style={styles.deck}>
       <View style={styles.box}><Text>Add new Deck</Text></View>
       <View style={styles.box}>
         <TextInput maxLength={40} 
         onChangeText={(deckName) => this.setState({deckName})}
         value={this.state.deckName} />
       </View>
       <View style={styles.box}>
       <TextButton style={styles.default} 
       onPress={this.addDeck}>
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
  return {
  }
}

function mapDispatchToProps (dispatch, { navigation }) {
  return {
    addDeck: (deck) => dispatch(addDeckAsync(deck)),
    goBack: () => navigation.goBack()
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewDeck);