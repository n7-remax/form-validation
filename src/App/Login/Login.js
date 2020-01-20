import React from 'react';

import "./login.css"

function Login() {
    return (
        <div className="login">
            <div className="support-section">
                <div className="logo-section">
                    <div className="logo"></div>
                    <span className="label">Technologies</span>
                </div>
                <div>
                    <span>Get how-to help and instructions or specific feutures in</span>
                </div>
                <div className="buttons-place">
                    <div className="button">help center</div>
                    <span className="or">or</span>
                    <div className="button">support</div>
                </div>
            </div>
            <div className="sign-in-section">
                <div className="welcome">
                    <h2>Welcome Back</h2>
                    <span>Sign in to continue to IO Technologies</span>
                </div>
                <div>
                    <form>
                        <input placeholder="Your Email" type="email"></input>
                        <input placeholder="Password" type="password"></input>
                    </form>
                </div>
                <div className="confirm-place">
                    <div className="confirm-button"><span>Log in</span></div>
                </div>
                <div className="forgot-password">
                    <span>Forgot your password? <a href="#">Reset</a></span>
                </div>
            </div>
        </div>
    );
}

export default Login;
