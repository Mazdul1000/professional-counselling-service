import {QuestionMarkCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h1  className="blogs-header">Read Our Blogs</h1>

            {/* <div className="blog">
                <h4><QuestionMarkCircleIcon className='question-icon'></QuestionMarkCircleIcon>Difference between authorization and authentication. </h4>
                <p><span className='answer'>Answer:</span>Though authentication and authorization is related to each other but they are different term. Authentication is the process to identify the user. This process identify if the user is registered or verified. <br />
                    On the other hand Authorization is the process of verifying how much access the user has. It detects , if the user has access on a particular page ,data or service.
                    Authentication is the first step where user is identified. Then came the authorization that control the access of the user. </p>
            </div> */}

        </div>
    );
};

export default Blogs;