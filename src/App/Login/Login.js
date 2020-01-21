import React from 'react';

import { Link } from 'react-router-dom'

import "./login.css"

function Login() {
    return (
        <div className="login">
            <div className="sign-in-section">
                <div className="welcome">
                    <h2>Welcome Back</h2>
                    <span>Sign in to continue to IO Technologies</span>
                </div>
                <div className="form-section">
                    <form className="form">
                        <input placeholder="Your email" type="email"></input>
                        <input placeholder="Password" type="password"></input>
                    </form>
                </div>
                <div className="confirm-place">
                    <a href="#" className="confirm-button">LOG IN<span class="arrow"> &#10230;</span></a>
                </div>
                <div className="forgot-password">
                    <span>Forgot your password? <Link to="/forgot-password">Reset</Link></span>
                </div>
            </div>
        </div>
    );
}

export default Login;
