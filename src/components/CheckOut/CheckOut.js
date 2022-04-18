import React from 'react';
import { Spinner } from 'react-bootstrap';
import './CheckOut.css'

const CheckOut = () => {
    return (
        <div className='check-out'>
           <div>
             <h1>CheckOut Section</h1>
         </div>
         <div> 
         <h2 className='loading-text'>Going to the payment section</h2>
            </div>
            <div>
                <Spinner className='spinner' animation="grow"/>
                <Spinner className='spinner' animation="grow"/>
                <Spinner className='spinner' animation="grow"/>
                <Spinner className='spinner' animation="grow"/>
            </div>
        </div>
    );
};

export default CheckOut;