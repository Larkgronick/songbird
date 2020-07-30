import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.scss';
import {birdTypes} from '../../constants/constants';


class Header extends React.Component {
    state={
      score: 0
    }
  
    render() {
      return (
      <header className='header'>
        <div className='cap'>
          <img src={logo} alt='logo'/>
          <span>Score: {this.state.score}</span>
        </div>
        <div className='bird-types'>{birdTypes.map((item) => (
              <button className='buttons'>
                {item}
              </button>
            ))}
        </div>

      </header>
      );
    }
}
export default Header;
