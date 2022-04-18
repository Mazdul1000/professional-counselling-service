import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';


const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

    let errorElement;
    if (error || UpdateError) {
        errorElement = <p className='text-danger'>Error: {error?.message} {UpdateError?.message} </p>
    }

    if (loading || updating) {
        return <h1>Loading</h1>
    }

    const navigateToLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }




    const handleFormSubmit = e => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password);
        toast('generating account');
        updateProfile({ username });


    }
    return (




        <div className='w-100'>


            <Form onSubmit={handleFormSubmit} id='form' className=' w-50 mx-auto mt-5 border p-4 rounded'>
                <h1 className='login-title fw-bold text-center mt-3'>Please Register</h1>
                <SocialLogin></SocialLogin>

                <Form.Group className="mb-3">

                    <Form.Control className='user-input' name="username" type="text" placeholder="Enter username" required />


                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Control className='user-input' type="email" name="email" placeholder="Enter email" required />

                </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control className='user-input' name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {errorElement}
                <Button className='submit-btn btn-success d-block' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='fw-bold text-center mt-3 fs-4'>Already have an account? <span className='text-danger' role="button" onClick={navigateToLogin}>Please Log In!</span></p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;