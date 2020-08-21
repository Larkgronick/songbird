import React from 'react'; 
import './Game.scss';
import Bird from '../Bird/Bird'
import Variants from '../Variants/Variants';
import Description from '../Description/Description';

class Game extends React.Component {  
    render(){ 
        const endGame = this.props.data.endGame;
        let show;
        if (endGame === false) {
            show = <GameWindow data={this.props.data} nextLevel={this.props.nextLevel}/>
          } else {
            show = <CongtatsWindow />;
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
        const correct = this.props.data.correct
        return (
            <div>
                <Bird bird={birdName} correct={correct}/>
                <div className='game-window'>
                    <Variants variants={variants}/>
                    <Description />
                </div>
                <button onClick={this.props.nextLevel} className='next-button'>Next</button>
            </div>
          );
    }  

}

class CongtatsWindow extends React.Component{
    render(){
        return (
            <div>
                <p>Поздравляем</p>
                <p>Вы прошли викторину и набрали 16 из 30 возможных баллов</p>
                <button>Again</button>
            </div>
          );
    }  

}

export default Game;
