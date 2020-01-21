import React, { Component } from 'react';
import { TweenMax } from "gsap";

import './inputValidation.css'

class InputValidation extends Component {
    inputRef = React.createRef();

    state = { value: '' };

    validate = () => {
        const haveError = !!this.valueValidationError;
        TweenMax.to(this.inputRef.current, 0.12, { x: "+10", yoyo: true, repeat: 5 });
        TweenMax.to(this.inputRef.current, 0.12, { x: "-10", yoyo: true, repeat: 5 });
        return !haveError;
    }

    get valueValidationError() {
        let error = null;
        this.props.rules.some(rule => error = rule(this.state.value));
        return error;
    }

    render() {
        const {
            valueValidationError, onChange, inputRef,
            state: { value },
        } = this;
        
        const errorHighlight = valueValidationError && value

        return (
            <div>
                <input 
                    {...this.props}
                    className={`custom-input ${errorHighlight?'input-error':''}`}
                    ref={inputRef}
                    value={value}
                    onChange={e => this.setState({ value: e.target.value })}
                />
                {/* <div>{valueValidationError}</div> */}
            </div>
        );
    }
}

export default InputValidation