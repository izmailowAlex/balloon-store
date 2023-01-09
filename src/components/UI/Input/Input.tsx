import React from 'react'
import { IInputProps } from '../../../interfaces/interface'
import './Input.css'

function Input (
  {
    className,
    name,
    value,
    placeholder,
    label,
    error,
    errorMessage,
    success,
    successMessage,
    maxlength,
    onChange,
    onFocus,
  }: IInputProps
): JSX.Element {

  let classname = className ? 'input ' + className : 'input'
  classname = label ? classname + ' input_labeled' : classname
  classname = error ? classname + ' input_error' : classname
  classname = success ? classname + ' input_success' : classname

  return (
    <div className={classname}>
      <input
        className="input__textbox"
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        maxLength={maxlength}
        onChange={(event) => {
            onChange(Number(event.target.value))
        }}
        onFocus={onFocus}
      />
      {label ? <label className="input__label">{label}</label> : ''}
      {error ? <span className="input__message">{errorMessage}</span> : ''}
      {success ? <span className="input__message">{successMessage}</span> : ''}
    </div>
  )
}

export default Input
