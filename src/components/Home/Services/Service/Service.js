import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, session, description, img, _id } = service;
    const navigate = useNavigate();

    const handleBookNowBtn = () => {
        navigate(`/checkout/${_id}`)
    }
    return (
        <div className='service-container mx-auto w-75 mt-5'>
            <Card className="service mx-auto bg-dark text-white">
                <Card.Img className='card-img w-100' src={img} alt="Card image" />
                <Card.ImgOverlay className=' img-overlay d-flex flex-column justify-content-center align-items-center'>
                    <Card.Title className='service-title'>{name}</Card.Title>
                    <Card.Text className='service-info px-4'>
                        {description}
                    </Card.Text>
                    <Card.Text className='service-session'>Appointment: {session} per month.</Card.Text>
                    <Card.Text className='service-price'>Price: ${price}/<small>mo</small> </Card.Text>
                    <Button onClick={handleBookNowBtn} className='book-btn btn btn-success'>Book Now</Button>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Service;