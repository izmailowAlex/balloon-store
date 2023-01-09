export interface ICheckboxProps {
  children: string | undefined
  className: string | undefined
  onChange: () => Event | undefined
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

export type Callback<T> = (data?: T) => void
