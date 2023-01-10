import React from 'react'
import { ICheckboxProps } from '../../../interfaces/interface'

import './Checkbox.css'

function Checkbox ({
  children,
  className,
  onChange
}: ICheckboxProps): JSX.Element {
  let classname = 'checkbox'

  if (className !== undefined) {
    classname = 'checkbox ' + className
  }

  return (
    <label className={classname}>
      <input className="checkbox__input" type="checkbox" onChange={onChange} />
      <span className="checkbox__wrapper">
        <span className="checkbox__icon">
          <svg className="checkbox__svg">
            <use href="#check"></use>
          </svg>
        </span>
        <span className="checkbox__label">{children}</span>
      </span>
    </label>
  )
}

export default Checkbox
