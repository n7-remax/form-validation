import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import InputValidation from './InputValidation/InputValidation'
import ValidationRules from './ValidationRules/validationRules'

import "./login.css"

class Login extends Component {

    myInputRef1 = React.createRef();
    myInputRef2 = React.createRef();

    onValidatePress = () => {
        const isAllFiedsValid = true
            & this.myInputRef1.current.validate()
            & this.myInputRef2.current.validate();

        if (isAllFiedsValid) alert('all fields valid');
    }

    render() {
        const { myInputRef1, myInputRef2, onValidatePress } = this;

        return (
            <div className="login" id="login">
                <div className="sign-in-section">
                    <div className="welcome">
                        <h2>Welcome Back</h2>
                        <span>Sign in to continue to IO Technologies</span>
                    </div>
                    <div className="form-section">
                        <form className="form">
                            <InputValidation type="email" placeholder="Your email" ref={myInputRef1} rules={ValidationRules.inputEmail} />
                            <InputValidation type="password" placeholder="Password" ref={myInputRef2} rules={ValidationRules.inputPassword} />
                        </form>
                    </div>
                    <div className="confirm-place">
                        <div onClick={onValidatePress} className="confirm-button">LOG IN<span class="arrow"> &#10230;</span></div>
                    </div>
                    <div className="forgot-password-place">
                        <span>Forgot your password? <Link to="/forgot-password">Reset</Link></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
