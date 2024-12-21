import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import SignInFormCSS from './SignInForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Adjust path as necessary
import { Link, useNavigate } from 'react-router-dom';

const SignInForm = ({ onClose }) => {
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
            toast.error(err.message);
        }
        setEmail("");
        setPassword("");
    };

    const triggerResetEmail = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success('Password reset email sent');
        } catch (error) {
            toast.error(error.message);
        }
    };
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
    return (
        <form className={SignInFormCSS.SignInForm} onSubmit={handleSubmit}>
            <button className={SignInFormCSS.closeButton} onClick={onClose}>
                &#x2715;
            </button>
            <header>
                Hi, Welcome Back!
            </header>
            <div className={SignInFormCSS.inputContainer}>
                <input
                    type="text"
                    placeholder="Username or Email Address"
                    className={SignInFormCSS.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className={SignInFormCSS.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className={SignInFormCSS.options}>
                <label className={SignInFormCSS.checkboxLabel}>
                    <input
                        type="checkbox"
                        className={SignInFormCSS.checkbox}
                    />
                    <span>Keep me signed in</span>
                </label>
                <button className={SignInFormCSS.forgotButton} onClick={triggerResetEmail}>Forgot?</button>
            </div>
            <div className={SignInFormCSS.actions}>
                <button className={SignInFormCSS.signInButton}>Sign In</button>
                <p className={SignInFormCSS.registerPrompt}>Don't have an account?  <Link to='/SignUp'>Register Now</Link></p>
            </div>
            <ToastContainer/>
        </form>
    );
};

export default SignInForm;
