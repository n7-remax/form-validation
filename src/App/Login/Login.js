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
                    <span>or</span>
                    <div className="button">support</div>
                </div>
            </div>
            <div className="sign-in-section">
                <div><span>Welcome Back</span>
                </div>
            </div>
        </div>
    );
}

export default Login;
