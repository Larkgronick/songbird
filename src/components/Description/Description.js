import React from 'react';
import './Description.scss';
import AudioPlayer from 'react-h5-audio-player';
import birdDefault from '../../assets/default.png';




class Rules extends React.Component { 
    render(){
        return (
            <div>
                <p>Послушайте плеер.</p>
                <p>Выберите птицу из списка</p>
            </div>
        );
    }

}

class Answer extends React.Component { 
    render(){
        return (
            <figure className='bird-data'>
            <img src={birdDefault} alt='bird'/>
           <figcaption className='bird-riddle'>
               <div>Bird name</div>
               <hr/>
               <p>Latin</p>
               <AudioPlayer
                   style={{backgroundColor: '#303030', boxShadow: 'none'}}
                   autoPlay
                   src="http://example.com/audio.mp3"
                   onPlay={e => console.log("onPlay")}
                   showJumpControls={false}
                   customAdditionalControls={[]}

               />
               <p>DESCRIPTION</p>
           </figcaption>
        </figure> 
        );
    }

}


class Description extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            startGame: true
        };
      }
    
    render() {
        const startGame = this.state.startGame;
        let description;
        if (startGame === false) {
            description = <Rules />
          } else {
            description = <Answer />;
          }

      return (
        <aside className='description'>{description}</aside>   
      );
    }
}
export default Description;
