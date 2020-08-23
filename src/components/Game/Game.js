import React from 'react'; 
import './Game.scss';
import Bird from '../Bird/Bird'
import Variants from '../Variants/Variants';
import Description from '../Description/Description';

class Game extends React.Component {  
    render(){ 
        const endGame = this.props.data.endGame;
        const score = this.props.data.score;
        let show;
        if (endGame === false) {
            show = <GameWindow data={this.props.data} nextLevel={this.props.nextLevel} checkAnswer={this.props.checkAnswer}/>
          } else {
            show = <CongtatsWindow score={score} resetGame={this.props.resetGame}/>;
          }
        return (
            <div>{show}</div>
          );
    }  

}

class GameWindow extends React.Component{
    render(){
        const birdName = this.props.data.bird;
        const variants = this.props.data.variants;
        const correct = this.props.data.correct;
        const startGame = this.props.data.startGame;
        const userAnswer = this.props.data.userAnswer;
        return (
            <div>
                <Bird bird={birdName} correct={correct}/>
                <div className='game-window'>
                    <Variants variants={variants} checkAnswer={this.props.checkAnswer}/>
                    <Description variants={variants} userAnswer={userAnswer} startGame={startGame} />
                </div>
                <button onClick={this.props.nextLevel} className='next-button'>Next</button>
            </div>
          );
    }  

}

class CongtatsWindow extends React.Component{
    render(){
        const score = this.props.score
        return (
            <div className='congrats-window'>
                <p className='congrats'>Поздравляем!</p>
                <p className='message'>Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
                <hr/>
                <button onClick={this.props.resetGame} class='congrats-button'>Again</button>
            </div>
          );
    }  

}

export default Game;
