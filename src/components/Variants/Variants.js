import React from 'react';
import './Variants.scss';
import {birdsData} from '../../constants/constants';

class Variants extends React.Component {

  createVariants(){
    const variants = this.props.variants.map(el=>el.name);
    return variants.map((item) => 
      <li><span className='dot'>•</span>{item}</li>
      ) 
    }
     
  render() {
    return (
      <ul className='variants-block'>
        {this.createVariants()}
      </ul>
    );
  }
}
export default Variants;
