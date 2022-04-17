import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css';

const Services = () => {

    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data))

    },[])
    return (
        <div className='services-title mt-5 mb-2'>
            <h1>Services</h1>
            {services.map(service => <Service key={service.id} service={service}></Service>)}
        </div>
    );
};

export default Services;