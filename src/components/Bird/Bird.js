import React from 'react';
import './Bird.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import birdDefault from '../../assets/default.png';

class Bird extends React.Component {
    render(){ 
        const correct = this.props.correct;
        const name = this.props.bird.name;
        const image = this.props.bird.image;
        const audioURL = this.props.bird.audio;
        if (correct === false) {
            return  (
               <figure className='bird-data'>
                  <img src={birdDefault} alt='bird'/>
                  <figcaption className='bird-riddle'>
                      <div>*****</div>
                      <hr/>
                      <AudioPlayer 
                          style={{backgroundColor: '#303030', boxShadow: 'none'}}
                          src={audioURL}
                          showJumpControls={false}
                          customAdditionalControls={[]}
                      />
                  </figcaption>
               </figure> 
            );
          } else {
            return  (
                <figure className='bird-data'>
                   <img src={image} alt='bird'/>
                   <figcaption className='bird-riddle'>
                       <div>{name}</div>
                       <hr/>
                       <AudioPlayer 
                           style={{backgroundColor: '#303030', boxShadow: 'none'}}
                           src={audioURL}
                           showJumpControls={false}
                           customAdditionalControls={[]}
                       />
                   </figcaption>
                </figure> 
             );
          }
    }  

}
export default Bird;
