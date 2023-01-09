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

export type Callback<T> = (data?: T) => void
