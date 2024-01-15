import React from 'react';
import { Carousel } from '../Carousel/Carousel';
import './about.css';

export const About = (props) => {
  return (
    <div id='about'>
      <div className='container about-container'>
        <div className='row row-about'>
          <div className='col-xs-12 col-md-12'>
            <div className='about-text'>
              <h2>El club</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h3>Why Choose Us?</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-md-12 slider-container'>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};
