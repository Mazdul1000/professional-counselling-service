import React from 'react';
import { Card } from 'react-bootstrap';
import myImg from '../../images/me.jpg';
import './About.css';

const About = () => {
    return (
        <div className='w-100 about-container my-5'>
            <h1 className='about-title mb-5'>About Me</h1>

  <Card className='about-card w-50 mx-auto p-3'>
    <Card.Img className='w-50 mx-auto' variant="top" src={myImg} />
    <Card.Body>
      <Card.Text>
          <div className='about-info'>
             <h3 className='text-center'>Mazedul Hasan</h3> 
             <p>Currently I am learning web development. My goal is to be a Full Stack Web Developer and get hired by good tech company. In order to get there , I have written a list of some large web application projects which I will complete within 2/3 month.Building those projects will enhance my learning and experience.And also I can showcase those project on my portfolio.</p>
          </div>
       
      </Card.Text>
      </Card.Body>
  </Card>


        </div>
    );
};

export default About;