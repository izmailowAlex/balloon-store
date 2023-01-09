import {FocusEvent} from 'react';
import { To } from 'react-router-dom'

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

export interface IButtonProps {
  children: string
  className: string
  to?: To
  onClick?: () => Event
}

export interface ICounterProps {
  count: number
  min: number
  max: number
}

export interface ICardProps {
  product: IProduct
}

export interface IProduct {
  id: string
  title: string
  image: string
  count: number
  min: number
  max: number
  price: number
  instock: boolean
  discount: number
  category: string
  type: string
  color: string
  size: string
  producer: string
  country: string
  description: string
}

export interface IProductsLibrary {
  productsLibrary: IProduct[]
}

export type Callback<T> = (data?: T) => void
