import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel indicators={false} className='carousel-container m-3'>
                
            <Carousel.Item className='carousel-item'>
      <div className="row banner">
          <div className="col-7 p-4">
              <img
      className="d-block"
      src="https://i.ibb.co/zXptcTQ/2112-w037-n003-78-B-p1-78.jpg"
      alt="Third slide"
    />
  </div>
  <div className="col-5 banner-info"> 
    <h2 className='text-light'>Professional Therapist</h2>
    <p>Counselling on any mental problem and family issue</p>
  </div>
      </div>

  </Carousel.Item>
  <Carousel.Item className='carousel-item'>
      <div className="row banner">
          <div className="col-7 p-4">
              <img
      className="d-block"
      src="https://i.ibb.co/gJ565rB/brain-study-background-mental-health-care-medical-technology-1.jpg"
      alt="Third slide"
    />
  </div>
  <div className="col-5 banner-info"> 
    <h2> Helping on Mental Problem</h2>
    <p>Help you live a better and happier life</p>
  </div>
      </div>

  </Carousel.Item>
  <Carousel.Item className='carousel-item'>
      <div className="row banner">
          <div className="col-7 p-4">
              <img
      className="d-block "
      src="https://i.ibb.co/M8dzFSV/2112-w037-n003-79-B-p1-79.jpg"
      alt="Third slide"
    />
  </div>
  <div className="col-5 banner-info"> 
    <h2>Cognitive behavioural therapy (CBT)</h2>
    <p>Help you out to get rid of your mental problem.</p>
  </div>
      </div>

  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;