import React, { useState } from 'react';
// import { app } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { db } from './firebase'; // Add this line to import the Firestore database
import { setDoc, doc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import style from './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    skill:'',
    bio:'',
    profileImg:'',
    coverImg:'',
    facebook:'',
    twitter:'',
    linkedin:'',
    website:'',
    github:''
  });
  const navigate=useNavigate();

  const changeHandler = (e) => {
    setInput({...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.password!== input.confirmPassword) {
      console.log('Passwords do not match');
      toast.error('Passwords do not match');

      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, input.email, input.password);
      const user = userCredential.user;
      // console.log(user.uid);
      navigate('/login')
      // Store additional user data in Firestore
      const userData = {
        firstName: input.firstName,
        lastName: input.lastName,
        userName: input.userName,
        email:user.email,
        mobileNumber: input.mobileNumber,
        skill:input.skill,
        bio:input.bio,
        profileImg:input.profileImg,
        coverImg:input.coverImg,
        facebook:input.facebook,
        twitter:input.twitter,
        linkedin:input.linkedin,
        website:input.website,
        github:input.github
      };
      await setDoc(doc(db, "Users", user.uid), userData);
    
      
      toast.success('Registered successfully');
      console.log('Registered successfully');

      
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('Email address is already in use');
        toast.error('Email address is already in use');

      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className='signup-container'>
      <form className='signup-form p-5' onSubmit={handleSubmit} autoComplete='off'>
    
          <input className='form-control p-2 mb-2' type='text' placeholder='fname' onChange={changeHandler} name='firstName'/>
  
          <input className='form-control p-2 mb-2' type='text' placeholder='Lname' onChange={changeHandler} name='lastName'/>
        
          <input className='form-control p-2 mb-2' type='text' placeholder='Uname' onChange={changeHandler} name='userName'/>
  
          <input className='form-control p-2 mb-2' type='email' placeholder='email' onChange={changeHandler} name='email'/>
    
          <input className='form-control p-2 mb-2' type='phone' placeholder='mobile' onChange={changeHandler} name='mobileNumber'/>
        
          <input className='form-control p-2 mb-2' type='password' placeholder='password' onChange={changeHandler} name='password'/>
          
          <input className='form-control p-2 mb-2' type='password' placeholder='confirmpassword' onChange={changeHandler} name='confirmPassword' />

          <input className='form-control' type='hidden' name='skill'></input>

          <input className='form-control' type='hidden' name='bio'></input>

          <input className='form-control' type='hidden' name='profileImg'></input>

          <input className='form-control' type='hidden' name='coverImg'></input>

          <input className='form-control' type='hidden' name='facebook'></input>

          <input className='form-control' type='hidden' name='twitter'></input>

          <input className='form-control' type='hidden' name='website'></input>

          <input className='form-control' type='hidden' name='linkedin'></input>

          <input className='form-control' type='hidden' name='github'></input>

        
        <button className='form-control p-2 mb-2' type='submit' style={{backgroundColor:'#6031f6',color:'white'}}>Register</button>
        <p>Already Registered <Link to='/login'>Login</Link></p>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default SignUp;