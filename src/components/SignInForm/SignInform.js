import React from 'react';
import SignInFormCSS from './SignInForm.module.css'; // Adjust path as necessary

const SignInForm = ({ onClose }) => {
    return (
        <div className={SignInFormCSS.SignInForm}>
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
                />
                <input
                    type="password"
                    placeholder="Password"
                    className={SignInFormCSS.input}
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
                <button className={SignInFormCSS.forgotButton}>Forgot?</button>
            </div>
            <div className={SignInFormCSS.actions}>
                <button className={SignInFormCSS.signInButton}>Sign In</button>
                <p className={SignInFormCSS.registerPrompt}>Don't have an account? <a href="/register">Register Now</a></p>
            </div>
        </div>
    );
};

export default SignInForm;
