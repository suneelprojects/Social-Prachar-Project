import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import style from './SignUp&Login.module.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const auth = getAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('Login Successfully');
            navigate('/profile');
        } catch (err) {
            toast.error('Email or password is not Valid');
        }
        setEmail("");
        setPassword("");
    };

    const triggerResetEmail = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success('Password reset email sent');
        } catch (error) {
            toast.error("Email is Invalid");
        }
    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
    
    return (
        <div className={style.loginContainer}>
            <form className={`${style.loginForm} p-5 mt-5`} onSubmit={handleSubmit}>
                <h2>Hi, Welcome back</h2>
                <input
                    className='form-control p-2 mb-2'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
      <div style={{ position: 'relative', width: '100%' }}>

                <input
                    className='form-control p-2 mb-2'
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                      <span
        onClick={togglePasswordVisibility}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer'
        }}
      >
        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
      </span>
                </div>
                <Link onClick={triggerResetEmail} className='mb-5'>Forgot Password?</Link>
                <button
                    type='submit'
                    className='form-control p-2 mb-2 mt-2'
                    style={{ backgroundColor: '#6031f6', color: 'white' }}
                >
                    Login
                </button>
                <p>Don't have an account? <Link to='/SignUp'>Register</Link></p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
