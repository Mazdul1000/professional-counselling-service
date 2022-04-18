import React from 'react';
import { Button } from 'react-bootstrap';
import './Features.css';
import featureImg1 from '../../../images/features/feature1.png';
import featureImg2 from '../../../images/features/feature2.png';
import featureImg3 from '../../../images/features/feature3.png';
import {ArrowLeftIcon,ArrowRightIcon} from '@heroicons/react/solid'
const Features = () => {
    return (
        <div>
            
            <h1 className='feature-title' >Features</h1>
            
            
            <div className="row mx-2">
            
                {/* Left Side Features */}
                <div className="left-features d-flex flex-column justify-content-center col-md-12 col-lg-6  gap-5">
                    <div className="left-feature">
                        <h2>Personalized</h2>
                        <div className="divider"></div>
                        <p className='w-50'>Begin with a personalized assessment that will help us get the best outcome.</p>
                    </div>

                    <div className="left-feature">
                        <h2>Private</h2>
                        <div className="divider">
                        </div>
                            <p className='w-50'>Maintain a secured service. You can frankly share your any kind of mental or psychological problem .</p>
                        </div>
                        <div className="left-feature">
                            <h2>Professional</h2>
                            <div className="divider"></div>
                            <p className='w-50'>Your problem will be handled in a proper and professinal way.So join today and live a better life with happiness and joy</p>
                        </div>
                    </div>

                

                {/* Right side features */}
                <div className="right-features  col-md-12 col-lg-6">
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center right-title my-3 mb-5">
                        <h3>Star with a basic Assesment</h3>
                        <Button className='feature-btn btn-success mt-3'>Get Started</Button>
                        </div>

                        <div className="right-feature-container d-flex flex-column">

                            <div className="right-feature">
                                <img src={featureImg1} className="w-50" alt="" />
                                <h3 className='d-flex justify-content-center align-items-center '><span><ArrowLeftIcon className="side-arrow me-3"></ArrowLeftIcon></span> <span>Online therapy for individuals</span> </h3>
                            </div>

                            <div className="right-feature">
                                <h3 className='d-flex justify-content-center align-items-center '><span>Online therapy for couples</span> <span><ArrowRightIcon className="side-arrow ms-3"></ArrowRightIcon></span> </h3>
                                <img src={featureImg2} className="w-50" alt="" />
                            </div>
                            <div className="right-feature">
                                <img src={featureImg3} className="w-50" alt="" />
                                <h3 className='d-flex justify-content-center align-items-center '><span><ArrowLeftIcon className="side-arrow me-3"></ArrowLeftIcon></span> <span>Online Coaching</span></h3>
                            </div>

                        
                            </div>
                </div>
            </div>
        </div>



    );
};

export default Features;