import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))

    },[])
    return (
        <div className=' mt-5 mb-2'>
            <h1 className='services-title' >Services</h1>
            {services.map(service => <Service key={service._id} service={service}></Service>)}
        </div>
    );
};

export default Services;