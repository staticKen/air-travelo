import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button2';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
       {/* <video src='/videos/nav.mp4' autoPlay loop muted />  */}
      <h1>Exclusive deals on vacations and trips</h1>
      <p>WHERE WILL TOMORROW TAKE YOU?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--meduim'
        >
          GET STARTED
        </Button>
        <Button2
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--medium'
          onClick={console.log('hey')}
        >
         BOOK TRIP < i className="fas fa-sign-in-alt"/> 
        </Button2>
      </div>
    </div>
  );
}

export default HeroSection;