import React, { Component } from 'react';
import { TweenMax } from "gsap";
import 'gsap/CSSPlugin'
import Tippy from '@tippy.js/react';

import 'tippy.js/dist/tippy.css';
import './inputValidation.css'

class InputValidation extends Component {
    balloonRef = React.createRef();

    inputRef = React.createRef();

    state = { value: '' };

    validate = () => {
        const haveError = !!this.valueValidationError;
        if (haveError){
            TweenMax.to(this.inputRef.current, 0.12, { x: "+10", yoyo: true, repeat: 5 });
            TweenMax.to(this.inputRef.current, 0.12, { x: "-10", yoyo: true, repeat: 5 });  
            this.balloonRef.current._tippy.show();  
        }
        return !haveError;
    }

    get valueValidationError() {
        let error = null;
        this.props.rules.some(rule => error = rule(this.state.value));
        return error;
    }

    render() {
        const {
            valueValidationError, onChange, inputRef, balloonRef,
            state: { value },
        } = this;

        const errorHighlight = valueValidationError && value

        return (
            <Tippy content={valueValidationError} ref={balloonRef} trigger='manual' placement='right' flipBehavior={['right','bottom']} maxWidth={150}>
                <input
                    {...this.props}
                    className={`custom-input ${errorHighlight ? 'input-error' : ''}`}
                    ref={inputRef}
                    value={value}
                    onChange={e => this.setState({ value: e.target.value })}
                />
                {/* <div>{valueValidationError}</div> */}
            </Tippy>
        );
    }
}

export default InputValidation
