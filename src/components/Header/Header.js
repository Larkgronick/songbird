import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.scss';
import {birdTypes} from '../../constants/constants';

class Header extends React.Component {
    render() {
      return (
      <header className='header'>
        <div className='cap'>
          <img src={logo} alt='logo'/>
          <span>Score: {this.props.score}</span>
        </div>
        <div className='bird-types'>{birdTypes.map((item, index) => (
              <button key={index} className={this.props.category === index ? 'buttons active' : 'buttons'}>
                {item}
              </button>
            ))}
        </div>
      </header>
      );
    }
}
export default Header;
