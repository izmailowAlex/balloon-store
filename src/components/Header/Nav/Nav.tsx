import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav (): JSX.Element {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/catalog/">
            Каталог
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/page404/">
            Страница 404
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
