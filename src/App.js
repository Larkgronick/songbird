import React from 'react'; 
import './App.css';
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import {birdsData} from './constants/constants';
import shuffle from './components/helpers/shuffle';
import playAudio from './components/helpers/playAudio';
import correct from './assets/correct.mp3';
import wrong from './assets/wrong.mp3';

import randomNumber from './components/helpers/randomNumber';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        startGame: false,
        endGame: false,
        correct: false,
        category: 0,
        score: 0,
        bird: {},
        answer: 0,
        variants: [],
        userAnswer: 6,
        
    };
    this.baseState = this.state 
    this.createGame = this.createGame.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }
  
  createGame(category){
    if(category < 5) {
      let variants = shuffle(birdsData[category]);
      let answer = randomNumber(0,5);
      let bird = variants[answer];
      this.setState({
        bird: bird,
        answer: answer,
        variants: variants,  
      })
  } else {
      this.setState({
        endGame: true
      })
  }
    
  }

  resetGame(){
    this.setState(this.baseState);
    this.createGame(this.state.category)
    
  }

  componentDidMount(){
    this.createGame(this.state.category)
    
  }

  nextLevel() {
    this.setState({ 
      category: this.state.category + 1,
      correct: false,
      startGame: false 
    
    }, () => {                              
      this.createGame(this.state.category);
    });

  }

  checkAnswer(answer){
    this.setState({
      startGame: true,
      userAnswer: answer
    })
    if(this.state.answer === answer){
      this.setState({
        correct: true,
        startGame: true,
      })
      return playAudio(correct);
    }else{
      return playAudio(wrong);
    }
  }

  render(){
  return (
    <div className='App'>
      <div>{this.state.answer}</div>
      <Header category={this.state.category} score={this.state.score} nextLevel = {this.nextLevel}/>
      <Game nextLevel={this.nextLevel}  checkAnswer={this.checkAnswer} resetGame={this.resetGame} data={this.state} />
    </div>
  );
  }
}

export default App;
