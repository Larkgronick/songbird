import React from 'react';
import './Variants.scss';
import {birdsData} from '../../constants/constants';
import shuffle from '../../components/helpers/shuffle'

class Variants extends React.Component {

  randomRound(){
    let randomName = shuffle(birdsData).map(el => shuffle(el)).map(el=>el[0].name)
    return randomName.map((item) => (
    <li>
      {item}
    </li>
  ))
}
  render() {
    return (
      <ul className='variants-block'>{this.randomRound()}</ul>
    );
  }
}
export default Variants;