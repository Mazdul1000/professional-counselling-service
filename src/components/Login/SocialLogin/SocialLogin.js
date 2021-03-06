import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleIcon from '../../../images/icons/google.svg';
import Loading from '../../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    
    let errorElement;

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger text-center' style={{fontSize:"18px",fontWeight:"bold"}}>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
      }
    return (
        <div>         
        <Button onClick={() => signInWithGoogle()} className='google-login-btn btn-success text-center d-flex justify-content-center align-items-center'><span><img src={googleIcon} alt="" /></span><span>Continue With Google</span></Button>
        <p>{errorElement}</p>
        <div className='d-flex align-items-center justify-content-center mt-3 gap-3'><div className="divider w-25"></div> <h4 className='divider-text'>OR</h4> <div className="divider w-25"></div>  </div>
        </div>
    );
};

export default SocialLogin;