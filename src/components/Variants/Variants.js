import React from 'react';
import './Variants.scss';

class Variants extends React.Component {
  createVariants(){
    const roundClear=this.props.roundClear
    const variants = this.props.variants.map(el=>el.name);
    return variants.map((item, index) => 
      <li onClick={(e) => {this.props.checkAnswer(index, e)}}><span key={index} className={`${roundClear ? 'dot-wrong' : 'dot'}`}>•</span>{item}</li>
      ) 
    }
  render() {
    return (
      <ul  className='variants-block' >
        {this.createVariants()}
      </ul>
    );
  }
}
export default Variants;
