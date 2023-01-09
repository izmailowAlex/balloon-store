import React from 'react'
import { Link } from 'react-router-dom'
import { IButtonProps } from '../../../interfaces/interface'
import './Button.css'

function Button ({
  children,
  className,
  to,
  onClick,
}: IButtonProps): JSX.Element {
  const classname = className ? 'button ' + className : 'button'

  return (
    <>
      {to ? (
        <Link className={classname} onClick={onClick} to={to}>
          {children}
        </Link>
      ) : (
        <button className={classname} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  )
}

export default Button
