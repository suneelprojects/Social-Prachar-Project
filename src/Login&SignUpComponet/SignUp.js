import React, { useState } from 'react';
// import { app } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { db } from '../firebase'; // Add this line to import the Firestore database
import { setDoc, doc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import style from './SignUp&Login.module.css';

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
    facebook:'',
    twitter:'',
    linkedin:'',
    website:'',
    github:'',
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
        facebook:input.facebook,
        twitter:input.twitter,
        linkedin:input.linkedin,
        website:input.website,
        github:input.github,
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
  }; const [passwordVisible, setPasswordVisible] = useState(false);
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={style.signupContainer}>
      <form className={`${style.signupForm} p-5 mt-3`} onSubmit={handleSubmit} autoComplete='off'>
    
          <input className='form-control p-2 mb-2' type='text' placeholder='First Name' onChange={changeHandler} name='firstName' required/>
  
          <input className='form-control p-2 mb-2' type='text' placeholder='Last Name' onChange={changeHandler} name='lastName' required/>
        
          <input className='form-control p-2 mb-2' type='text' placeholder='User Name' onChange={changeHandler} name='userName' required/>
  
          <input className='form-control p-2 mb-2' type='email' placeholder='Email' onChange={changeHandler} name='email' required/>
    
          <input className='form-control p-2 mb-2' type='phone' placeholder='Mobile' onChange={changeHandler} name='mobileNumber' required/>
      
      <div style={{ position: 'relative', width: '100%' }}>
          <input className='form-control p-2 mb-2'  type={passwordVisible ? 'text' : 'password'} placeholder='password' onChange={changeHandler} name='password' required/>
          <span
          onClick={togglePasswordVisibility}
          style={{
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
          }}
        >
          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      
          
          <input className='form-control p-2 mb-2' type='password' placeholder='confirmpassword' onChange={changeHandler} name='confirmPassword' required />

          <input className='form-control' type='hidden' name='skill'></input>

          <input className='form-control' type='hidden' name='bio'></input>

          <input className='form-control' type='hidden' name='facebook'></input>

          <input className='form-control' type='hidden' name='twitter'></input>

          <input className='form-control' type='hidden' name='website'></input>

          <input className='form-control' type='hidden' name='linkedin'></input>

          <input className='form-control' type='hidden' name='github'></input>

          <input className='form-control' type='hidden' name='file'></input>

          <input className='form-control' type='hidden' name='fileName'></input>

          <input className='form-control' type='hidden' name='projectObjective'></input>

          <input className='form-control' type='hidden' name='projectDescription'></input>

        
         <div className='text-center'>
        <button className='mb-2 px-5 btn' type='submit' style={{backgroundColor:'#6031f6',color:'white'}}  
        >Register</button>
        </div>
        <p>Already Registered <Link to='/login'>Login</Link></p>
      </form>
      <ToastContainer/>
      </div>
  );
};

export default SignUp;