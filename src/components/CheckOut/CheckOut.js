import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './CheckOut.css';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CheckOut = () => {
    const {user, loading, error} = useAuthState(auth);
    const {serviceId} = useParams();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {data:service, isLoading} = useQuery('service', ()=> fetch(`http://localhost:5000/service/${serviceId}`).then(res => res.json()));

     if(isLoading || loading){
        return <Loading></Loading>
    }
    
    const {name, price, session, description, img} = service;

   

    const onSubmit = data => {
    console.log(data)

    const booking = {
        serviceId: serviceId,
        serviceName : name,
        price: price,
        patientName: data.name,
        phone: data.phone,
        email: data.email,
        address: data.address
    }

    fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => console.log(data));
    
    };

    return (
        <div className='check-out'>
           <div className="row w-100 mt-0">
               <div className="col-8">
                 <h2 className='my-5'>{name || ''}</h2>
                 <p className='fs-4'>{description}</p>
                 <h5 className='my-3'>Session: {session}</h5>
                 <h4 className='my-3'>Price: ${price}</h4>
               </div>

               <div className="col-4">
                <div>


   <form onSubmit={handleSubmit(onSubmit)} className=" border p-5 shadow">


  <label class="form-label" for="name">Name</label><div
   class="form-outline mb-4">   
    <input type="text" id="name" class="form-control" {...register("name", { required: true, maxLength: 20 })}/>
    
  </div>

  <div class="form-outline mb-4">
    <label class="form-label" for="address">Address</label>
    <input type="text" id="address" class="form-control" {...register("address", { required: true, maxLength: 20 })}/>
    
  </div>


  <div class="form-outline mb-4">
    <label class="form-label" for="email">Email</label>
    <input type="email" id="email" class="form-control" {...register("email", { required: true})}/>
    
  </div>


  <div class="form-outline mb-4">
    <label class="form-label" for="phone">Phone</label>
    <input type="text" id="phone" class="form-control" {...register("phone", { required: true})}/>
    
  </div>

  <div class="form-outline mb-4">
    <label class="form-label" for="price">Cost</label>
    <input type="text" id="price" class="form-control" value={'$'+price} disabled readOnly/>
    
  </div>



  <button type="submit" class="btn submit-button btn-block mb-4">Proceed</button>
</form>

                </div>
               </div>
           </div>
        </div>
    );
};

export default CheckOut;