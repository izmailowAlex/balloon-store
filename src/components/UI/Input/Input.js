import React from 'react';
import './Input.css';

function Input({className, name, value, placeholder, label, message, maxlength, onChange, onFocus, onBlur, onKeyDown}, ref) {
  let classname = className ? 'input ' + className : 'input';
  classname = label ? classname + ' input_labeled' : classname;

  return (
    <div className={classname}>
      <input
        className="input__textbox"
        type="text"
        ref={ref}
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        maxLength={maxlength}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      {label ? <label className="input__label">{label}</label> : ""}
      {message ? <span className="input__message">{message}</span> : ""}
    </div>
  );
}

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;