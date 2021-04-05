import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore, Discover, And Save</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/aruba.jpeg'
              text='Supersize your vacation with a trip to aruba'
              label='Island Escape'
              path='/'
            />
            <CardItem
           
              src='images/dubia.jpeg'
              text='Enjoy your summer at the worlds tallest tower in Dubia'
              label='Luxury'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/keys.jpeg'
              text='Florida Keys is the Ultimate romatic getaway'
              label='Romantic'
              path='/'
            />
            <CardItem
              src='images/Rio.jpeg'
              text='Experience  Football on the sands of Rio de Janeiro'
              label='Adventure'
              path='/'
            />
            <CardItem
              src='images/sand.jpeg'
              text='Zoom across the Sahara Desert on a quad bike and visit the iconic Pyramids of Egypt'
              label='Adrenaline'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;