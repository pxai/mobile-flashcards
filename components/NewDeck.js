import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TextButton from './TextButton'


class NewDeck extends React.Component {
  addDeck = () => {
    console.log('Adding Deck');
  };

  render() {
    return (
      <View style={styles.deck}>
       <View style={styles.box}><Text>Add new Deck</Text></View>
       <View style={styles.box}>
         <TextInput  />
       </View>
       <View style={styles.box}>
       <TextButton style={styles.default} onPress={this.addDeck}>
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewDeck);