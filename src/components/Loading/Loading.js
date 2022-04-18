import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css'

const Loading = () => {
    return (
        <div className='loading-container'>

   
            <div>
                <h2 className='loading-text'>Loading...</h2>
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

export default Loading;