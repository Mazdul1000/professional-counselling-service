import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'

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
    

    if(user){
      navigate('/home')
    }

    const handleFormSubmit = e => {
  e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    signInWithEmailAndPassword(email,password)
   
    .then( () => {
        navigate(from, {replace:true})
    })
    }

   

    const navigateToRegister = () => {
        
        navigate('/register');
    }
    return (
        <div className='w-100'>
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
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Log In
  </Button>
</Form>
<p className='fw-bold text-center mt-3 fs-4'>New to <span>Lotus</span> ? <span className='text-danger' role="button" onClick={navigateToRegister}>Please register!</span></p>
        </div>
            
    );
};

export default Login;