import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import TextButton from './TextButton';


class StartQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 0, correct: 0, showAnwser: false, finished: false };
  }

  answer = (userAnswer) => {
    let question = this.props.deck.questions[this.state.current];

    if (userAnswer) {
      console.log('Correct ', userAnswer, question);
      this.setState(function(prevState) {
        return {
          correct: prevState.correct + 1
        };
      });
    } else {
      console.log('Incorrect ', userAnswer, question);
    }
    this.next();
  }

  toggleAnswer = () => {
    let flag = !this.state.showAnwser;
    console.log('Show answer: ' , flag, this.state.showAnwser);

    this.setState(function(prevState) {
      return {
        showAnswer: !prevState.showAnswer
      };
    });

  }

  next = () => {
    let {current, correct, finished } = this.state;
    if (current === this.props.deck.questions.length - 1) {
      this.setState({finished: true})
      this.showResult();
    } else {
      this.setState({ current: current + 1});
    }
  }

  showResult = () => {
   // this.setState({ current: 0, correct: 0, showAnswer: false, finished: false });
  }

  reset = () => {
    this.setState({ current: 0, correct: 0, showAnswer: false, finished: false });
  }

  render() {
    const deck = this.props.deck;
    console.log('Changed state: ', this.state);
    return (
      <View style={styles.deck}>


        {this.state.finished ?
         (
           <View>
           <View style={styles.scoreBox}> 
              <Text style={styles.question}>
              {this.state.correct}/{deck.questions.length}
              </Text>
           </View>
            <View style={styles.box}>        
            <TextButton style={styles.correctButton} onPress={() => this.props.goBack()}>
              BACK TO DECK
            </TextButton>
          </View>
            <View style={styles.box}>   
            <TextButton style={styles.incorrectButton} onPress={() => this.reset()}>
            RESET QUIZ
            </TextButton>
          </View>
          </View>
         ) : (
          <View>
          <View style={styles.scoreBox}> 
              <Text style={styles.question}>
              {this.state.correct}/{deck.questions.length}
              </Text>
           </View>
          <View style={styles.box}> 
          <Text style={styles.question}>
            {this.state.showAnwser ?
              ( 
                deck.questions[this.state.current].answer
              ) : (
                deck.questions[this.state.current].question            
              )
            }
            </Text>
        </View>
            <View style={styles.box}>   
            <TextButton style={styles.showButton} onPress={() => this.toggleAnswer()}>
            Answer
            </TextButton>
          </View>
          <View style={styles.box}>        
            <TextButton style={styles.correctButton} onPress={() => this.answer(true)}>
              CORRECT
            </TextButton>
          </View>
            <View style={styles.box}>   
            <TextButton style={styles.incorrectButton} onPress={() => this.answer(false)}>
            INCORRECT
            </TextButton>
          </View>
        </View>

         )
        }
        
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
  scoreBox: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  question: {
    fontSize: 30
  },
  showButton: {
    textAlign: 'center',
    margin: 2,
    padding: 4,
    color: '#f00',
    width: 150
  },
  correctButton: {
    textAlign: 'center',
    margin: 2,
    padding: 4,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'green',
    width: 150
  },
  incorrectButton: {
    textAlign: 'center',
    margin: 2,
    padding: 4,
    borderWidth: 1,
    borderColor: '#000',
    width: 150,
    backgroundColor: 'red',
    color: '#fff'
  }
});

function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params
  console.log('StartQuiz> ', state.decks)

  return {
    deckId,
    deck:  state.decks.filter(d => d.id === deckId)[0],
  }
}

function mapDispatchToProps (dispatch, { navigation }) {
return {
    goBack: () => navigation.goBack()
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StartQuiz)