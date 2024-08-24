import React from 'react';
import './Gig.scss';
import { Slider } from 'infinite-react-carousel';

const Gig = () => {
  return (
    <div className='gig'>
      <div className='container'>
        <div className='left'>
          <span className='breadCrumbs'>
            FIVERR {'>'} GRAPHICS & DESIGN {'>'}
          </span>
          <h1>I will create ai generated art for you</h1>

          <div className='user'>
            <img src='' alt='' />
            <span>John Doe</span>
            <div className='stars'>
              <img src='/img/star.png' alt='' />
              <img src='/img/star.png' alt='' />
              <img src='/img/star.png' alt='' />
              <img src='/img/star.png' alt='' />
              <img src='/img/star.png' alt='' />
              <span>5</span>
            </div>
          </div>
          <Slider>
            <img
              src='https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <img
              src='https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <img
              src='https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
          </Slider>
        </div>
        <div className='right'></div>
      </div>
    </div>
  );
};

export default Gig;
