import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import googleIcon from '../../../images/icons/google.svg';
import './Register.css'

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
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (loading || updating) {
        return <h1>Loading</h1>
    }




    const navigateToLogin = () => {
        navigate('/login');
    }


    const handleFormSubmit = e => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password);
        toast('generating account');
        updateProfile({ username });
        console.log(user);

    }
    return (




        <div className='w-100'>
            <Form onSubmit={handleFormSubmit} id='form' className=' w-50 mx-auto mt-5 border p-4 rounded'>
                <h1 className='login-title fw-bold text-center mt-3'>Please Register</h1>
                <Button className='google-login-btn btn-success text-center d-flex justify-content-center align-items-center'><span><img src={googleIcon} alt="" /></span><span>Continue With Google</span></Button>
                <div className='d-flex align-items-center justify-content-center mt-3 gap-3'><div className="divider w-25"></div> <h4 className='divider-text'>OR</h4> <div className="divider w-25"></div>  </div>

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