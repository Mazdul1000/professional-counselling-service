import { HomeIcon, InboxIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
       
       
<div className="mt-5 footer-container">

  <footer className="footer text-dark text-center text-lg-start">
  
    <div className="container p-4">
     
      <div className="row mt-4">
       
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">About Me</h5>

          <h3>
            Professional Psychothepist
          </h3>
          <p>
            Bsc in Psychology, University of Dhaka
          </p>
          <p>Msc in Psychology, University of Texas</p>

        
        </div>
        
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4 pb-1 text-center">Contact</h5>


          <ul style={{marginLeft: "1.70em"}}>
            <li className="mb-3  list-unstyled">
              <span><HomeIcon style={{width:"30px"}}></HomeIcon></span><span className="ms-2">Sector-03, Uttara, Dhaka-1230.</span>
            </li>
            <li className="mb-3 list-unstyled">
              <span ><InboxIcon style={{width:"30px"}}></InboxIcon></span><span className="ms-2">mazdul1000@lotus.com</span>
            </li>
            <li className="mb-3 list-unstyled">
              <span ><PhoneIcon style={{width:"30px"}}></PhoneIcon></span><span className="ms-2">+ 48 234 567 88</span>
            </li>
          </ul>
        </div>
        
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4 text-center">Opening hours</h5>

          <table className="table text-center">
            <tbody className="fw-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8am - 1am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
     
    </div>
    

    
    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2022 Copyright:
    </div>
   
  </footer>

</div>
    );
};

export default Footer;