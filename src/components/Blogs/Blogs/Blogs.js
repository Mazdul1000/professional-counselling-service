import { ArrowRightIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h1  className="blogs-header">Read My Blogs</h1>

            <div className="blog">
                <h4><QuestionMarkCircleIcon className='question-icon'></QuestionMarkCircleIcon>Difference between authorization and authentication. </h4>
                <p><span className='answer'>Answer:</span>Though authitication and authorization is related to each other but they are different term. Authintication is the process to identify the user. This process identify if the user is registered or verified. <br />
                    On the other hand Autorization is the process of verifying how much access the user has. It detects , if the user has access on a particular page ,data or service.
                    Authentication is the first step where user is identified. Then came the authorization that control the access of the user. </p>
            </div>
            <div className="blog">
                <h4><QuestionMarkCircleIcon className='question-icon'></QuestionMarkCircleIcon>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p> <span className='answer'>Answer:</span> Firebase base authintication is free. It is easy to use and secured .It has a complete sign in system. <br />
                    There are several other option for authentication also. There is Amazon Cognito which also provides authentication. Auth0 is another option we can use for authentication. We can also Keycloak. These are some option we can use as alternate of firebas authentication. There are other options also.</p>
            </div>
            <div className="blog">
                <h4><QuestionMarkCircleIcon className='question-icon'></QuestionMarkCircleIcon>What other services does firebase provide other than authentication? </h4>
                <p><span className='answer'>Answer:</span> Other than authentication ,firebase as many other cool services. Firebase is complete package which can help us developing our mobile or web app  faster with fewer resources and more efficiently.Firebase provides these services:
                    <ul>
                        <li>Cloud Messaging</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Remote Config</li>
                        <li>Cloud Firestore</li>
                        <li>Firebase ML</li>
                        <li>Realtime Database</li>                      
                    </ul>
                </p>
            </div>

        </div>
    );
};

export default Blogs;