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
    onFocus
  }: IInputProps
): JSX.Element {
  let classname = 'input'
  if (className !== undefined) {
    classname = 'input ' + className
  }
  if (label !== undefined) {
    classname = classname + ' input_labeled'
  }
  if (error !== undefined) {
    classname = classname + ' input_error'
  }
  if (success !== undefined) {
    classname = classname + ' input_success'
  }

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
        onChange={(event) => { onChange(Number(event.target.value)) }}
        onFocus={onFocus}
      />
      {label !== undefined && <label className="input__label">{label}</label>}
      {error !== undefined && <span className="input__message">{errorMessage}</span>}
      {success !== undefined && <span className="input__message">{successMessage}</span>}
    </div>
  )
}

export default Input
