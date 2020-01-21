import React from 'react';
import { Link } from 'react-router-dom'


import './forgotpassword.css'


function ForgotPassword() {
    return (
        <div className="forgot-password">
            <div className="arrow-place">
            <Link to="/">&#129120;</Link>
            </div>
            <div className="heading">
                <h2>Forgot password?</h2>
            </div>
            <div className="form-section">
                <form className="form">
                    <input placeholder="Enter your email" type="email"></input>
                </form>
            </div>
            <div className="confirm-place">
                <a href="#" className="confirm-button">Send me instructions</a>
            </div>
        </div>
    );
}

export default ForgotPassword;
