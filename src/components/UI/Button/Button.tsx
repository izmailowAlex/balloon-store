import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

type ButtonProps = {
  children: string,
  className: string,
  to: string,
  button: boolean,
  onClick: () => Event | undefined
}

function Button({children, className, to, button, onClick}: ButtonProps): JSX.Element {
  const classname = className ? 'button ' + className : 'button';

  return (
    <>
      {button
        ? <button className={classname} onClick={onClick}>{children}</button>
        : <Link className={classname} onClick={onClick} to={to}>{children}</Link>
      }
    </>
  );
}

export default Button;