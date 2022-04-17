import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import img1 from '../../../images/banner1.jpg';
import img2 from '../../../images/banner2.jpg';
import img3 from '../../../images/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel indicators={false} className='carousel-container m-3'>
                
            <Carousel.Item className='carousel-item'>
      <div className="row">
          <div className="col-7 p-4">
              <img
      className="d-block"
      src={img3}
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
      <div className="row">
          <div className="col-7 p-4">
              <img
      className="d-block"
      src={img2}
      alt="Third slide"
    />
  </div>
  <div className="col-5 banner-info"> 
    <h2> Helping on Mental Problem</h2>
  </div>
      </div>

  </Carousel.Item>
  <Carousel.Item className='carousel-item'>
      <div className="row">
          <div className="col-7 p-4">
              <img
      className="d-block "
      src={img1}
      alt="Third slide"
    />
  </div>
  <div className="col-5 banner-info"> 
    <h2>Family resolution Disputes</h2>
  </div>
      </div>

  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;