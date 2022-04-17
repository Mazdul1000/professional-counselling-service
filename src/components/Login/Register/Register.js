import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const [sendEmailVerification, sending, VerificationError] = useSendEmailVerification(auth);
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

    const navigateToLogin = () =>{
        navigate('/login')
    }

if(user){
    navigate('/home')
}

    const handleFormSubmit = e => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        

        createUserWithEmailAndPassword(email,password);
        updateProfile({username});
        sendEmailVerification();

        console.log(user);
        
    }
    return (
        
    
    
       
            <div className='w-100'>
            <h1 className='text-primary fw-bold text-center mt-3'>Please Register</h1>
            <Form onSubmit={handleFormSubmit} className='w-50 mx-auto mt-5 border p-4 rounded'>
    
    
    
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  type="email" name="email" placeholder="Enter email"  required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    
    <Form.Group className="mb-3">
    <Form.Label>Username</Form.Label>
    <Form.Control name="username" type="text" placeholder="Enter username"  required/>
    </Form.Group>
    
    </Form.Group>
    
    
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" type="password" placeholder="Password" required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
    Register
    </Button>
    </Form>
    <p className='fw-bold text-center mt-3 fs-4'>Already have an account? <span className='text-danger' role="button" onClick={navigateToLogin}>Please Log In!</span></p>
        </div>
    );
};

export default Register;