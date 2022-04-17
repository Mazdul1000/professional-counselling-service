import './Login.css'
import React, { useState,useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
     const from = location?.state?.from?.pathname || '/';
     
    
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword
    (auth);
    
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <h1>Loading</h1>
    }

    if (user) {
        navigate(from, { replace: true });
    }
   
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    const handleFormSubmit = e => {
  e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;   
    signInWithEmailAndPassword(email,password)
    }
    const navigateToRegister = () => {
        
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    return (
        <div className='login w-100'>
            <h1 className='text-primary fw-bold text-center mt-3'>Please Login</h1>
            <Form onSubmit={handleFormSubmit} className='w-50 mx-auto mt-5 border p-4 rounded'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email"  required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
  </Form.Group>
 {errorElement}
 <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
  <Button variant="primary" type="submit">
    Log In
  </Button>
 
</Form>

<p className='fw-bold text-center mt-3 fs-4'>New to <span>Lotus</span> ? <span className='text-danger' role="button" onClick={navigateToRegister}>Please register!</span></p>

<ToastContainer />
        </div>

            
    );
};

export default Login;