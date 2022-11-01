import React, { useState } from 'react'
import {authService} from '../fbase';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import AuthFrom from '../components/AuthFrom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/auth.scss";


function Auth() {
  const onSocialClick = (e) => {
    // console.log(e.target.name)
    const {target: {name}} = e;
    let provider
    if(name === "google"){
      provider = new GoogleAuthProvider();
    }else if(name === "github"){
      provider = new GithubAuthProvider();
    }
    const data = signInWithPopup(authService, provider);
    // console.log(data);
  }
  // setNewAccount를 이전값에서 !이전= 부정값 으로 바꾼다.


  return (
    <div className='authContainer'>
      <FontAwesomeIcon icon="fa-solid fa-comment"
      color={"#1D4E8F"} size="3x" style={{marginBottom:30}}/>
      <AuthFrom />
      <div className='authBtns'>
        <button onClick={onSocialClick} name="google" className='authBtn'> 
        Continue with Google <FontAwesomeIcon icon="fa-brands fa-google" 
        color={"#1D4E8F"} />
        </button>
      </div>
    </div>
  )
}

export default Auth