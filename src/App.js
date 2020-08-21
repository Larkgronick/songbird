import React from 'react'; 
import './App.css';
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import {birdsData} from './constants/constants';
import shuffle from './components/helpers/shuffle';
import randomNumber from './components/helpers/randomNumber';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        endGame: false,
        correct: false,
        category: 0,
        score: 0,
        bird: {},
        answer: 0,
        variants: [],
        
    };
    this.createGame = this.createGame.bind(this)
    this.nextLevel = this.nextLevel.bind(this)
  }
  
  createGame(category){
    let variants = shuffle(birdsData[category]);
    let answer = randomNumber(0,5);
    let bird = variants[answer];
    this.setState({
      bird: bird,
      answer: answer,
      variants: variants,  
    })
    
  }

  componentDidMount(){
    this.createGame(this.state.category)
    
  }

  nextLevel() {
    this.setState({
      category: this.state.category + 1
    })
  }

  render(){
  return (
    <div className='App'>
      <div>{this.state.answer}</div>
      <Header category={this.state.category} score={this.state.score} nextLevel = {this.nextLevel}/>
      <Game nextLevel={this.nextLevel} data={this.state} />
    </div>
  );
  }
}

export default App;
