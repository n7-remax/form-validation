import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import InputValidation from '../InputValidation/InputValidation'
import ValidationRules from '../ValidationRules/validationRules'


import './forgotpassword.css'


function ForgotPassword() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.validate();
    }
    return (
        <div className="forgot-password" id="forgot-password">
            <div className="forgot-container">
                <div className="arrow-place">
                    <Link to="/form-validation">&#129120;</Link>
                </div>
                <div className="heading">
                    <h2>Forgot password?</h2>
                </div>
                <div className="form-section">
                    <form className="form">
                        <InputValidation type="email" placeholder="Enter your email" ref={inputEl} rules={ValidationRules.inputEmail} />
                    </form>
                </div>
                <div className="confirm-place">
                    <div onClick={onButtonClick} className="confirm-button">Send me instructions</div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
