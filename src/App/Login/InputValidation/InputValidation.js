import React, { Component } from 'react';

class InputValidation extends Component {
    inputRef = React.createRef();
    
    state = { value: '' };
  
    validate = () => {
      const haveError = !!this.valueValidationError;
      this.inputRef.current.animate([
        { transform: 'translateX(0px)' }, 
        { transform: 'translateX(-5px)' },
        { transform: 'translateX(5xp)' }
      ], { duration: 100, iterations: 5 });
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
      
      return (
        <div>
          <input
            className="customInput"
            value={value}
            onChange={e => this.setState({ value: e.target.value })}
          />
          <div ref={inputRef}>{valueValidationError}</div>
        </div> 
      );
    }
  }

  export default InputValidation