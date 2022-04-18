import './Login.css'

import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Loading/Loading';


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
    return <Loading></Loading>
  }

  if (user) {
    navigate(from, { replace: true });
  }

  let errorElement;
  if (error) {
    errorElement = <p className='text-danger text-center' style={{ fontSize: "18px", fontWeight: "bold" }}>Error: {error?.message}</p>
  }


  const handleFormSubmit = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password)
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
    else {
      toast('please enter your email address');
    }
  }

  return (
    <div className='login w-100 mb-5'>



      <Form id='form' onSubmit={handleFormSubmit} className='w-50 mx-auto mt-5 border p-4 rounded'>
        <h1 className='login-title fw-bold text-center mt-3'>Please Log In</h1>

        {/* Google login Section */}

        <SocialLogin></SocialLogin>
        {/* ************** */}


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} className='user-input' type="email" placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">

          <Form.Control className='user-input' ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        {errorElement}

        <Button className='submit-btn d-block text-center' variant="success" type="submit">
          Log In
        </Button>
        <p className='text-center mb-0 pass-reset d-flex justify-content-center align-items-center'><span> Forget Password?</span><button className='btn btn-link text-danger  text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
      </Form>

      <p className='toggle-btn fw-bold text-center fs-4'>New to <span>Lotus</span> ? <span style={{ color: "#064C37" }} role="button" onClick={navigateToRegister}>Please register!</span></p>

      <ToastContainer />
    </div>


  );
};

export default Login;