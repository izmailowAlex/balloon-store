import {FocusEvent} from 'react';

export interface ICheckboxProps {
  children: string | undefined
  className: string | undefined
  onChange?: () => Event | undefined
}

export interface IInputProps {
    className: string
    name?: string
    value: string
    placeholder?: string
    label: string
    error?: boolean
    errorMessage?: string
    success?: boolean
    successMessage?: string
    maxlength: number
    onChange: (value: number) => void
    onFocus?: (event: FocusEvent<any>) => void
}
