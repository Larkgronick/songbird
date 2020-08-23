import React from 'react';
import './Variants.scss';

class Variants extends React.Component {

  createVariants(){
    const variants = this.props.variants.map(el=>el.name);
    return variants.map((item, index) => 
      <li onClick={() => this.props.checkAnswer(index)}><span  className='dot'>•</span>{item}</li>
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
