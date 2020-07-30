import React from 'react'; 
import './Game.scss';
import Bird from '../Bird/Bird'
import Variants from '../Variants/Variants';
import Description from '../Description/Description';


class GameWindow extends React.Component{
    render(){
        return (
            <div>
                <Bird/>
                <div className='game-window'>
                    <Variants/>
                    <Description />
                </div>
                <button className='next-button'>Next</button>
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

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            endGame: false
        };
      }
    
    render(){
        const endGame = this.state.endGame
        let show
        if (endGame === false) {
            show = <GameWindow />
          } else {
            show = <CongtatsWindow />;
          }

        return (
            <div>{show}</div>
          );
    }  

}

export default Game;

