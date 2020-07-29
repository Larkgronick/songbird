import React from 'react';
import './Bird.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import birdDefault from '../../assets/default.png';

class Bird extends React.Component {
    state={
      score: 0
    }
  
    render() {
      return (
         <figure className='bird-data'>
             <img src={birdDefault} alt='bird'/>
            <figcaption className='bird-riddle'>
                <div>Bird name</div>
                <hr/>
                <AudioPlayer
                    autoPlay
                    src="http://example.com/audio.mp3"
                    onPlay={e => console.log("onPlay")}
                    showJumpControls={false}
                    customAdditionalControls={[]}

                />
            </figcaption>
         </figure> 
      );
    }
}
export default Bird;