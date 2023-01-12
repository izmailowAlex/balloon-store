import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav/Nav'
import Logo from '../../images/logo.svg'
import './Header.css'
import Actions from './Actions/Actions'

function Header (): JSX.Element {
  return (
    <div className="header">
      <div className="header__container container">
        <Nav />
        <Link className="header__logo" to="/">
          <img src={Logo} alt="Balloon Logo" />
        </Link>
        <Actions />
      </div>
    </div>
  )
}

export default Header
