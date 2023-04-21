import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Login.css"

const Login = () => {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();
  
    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      if (user != null) {
        navigate('/home');
      }
    }, [user]);

  return (
    <div className="login">
       
        <TwitterIcon className="twitterIcon"/>
        <div onClick={handleGoogleSignIn} className="btn">
            LOGIN
        </div>

    </div>
  )
}

export default Login