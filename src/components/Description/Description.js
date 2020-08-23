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
        const birdName = this.props.variants[this.props.userAnswer].name;
        const species = this.props.variants[this.props.userAnswer].species;
        const image = this.props.variants[this.props.userAnswer].image;
        const description = this.props.variants[this.props.userAnswer].description;
        const audio = this.props.variants[this.props.userAnswer].audio;
        return (
            <figure className='bird-data'>
            <img src={image} alt='bird'/>
           <figcaption className='bird-riddle'>
             <div>{birdName}</div>
               <hr/>
               <p>{species}</p>
               <AudioPlayer
                   style={{backgroundColor: '#303030', boxShadow: 'none'}}
                   src={audio}
                   showJumpControls={false}
                   customAdditionalControls={[]}
               />
               <p>{description}</p>
           </figcaption>
        </figure> 
        );
    }

}

class Description extends React.Component {  
    render() {  
        const startGame = this.props.startGame;
        let description;
        if (startGame === false) {
            description = <Rules />
          } else {
            description = <Answer variants={this.props.variants} userAnswer={this.props.userAnswer}/>;
          }

      return (
        <aside className='description'>{description}</aside>   
      );
    }
}
export default Description;
