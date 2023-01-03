import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="catalog">Каталог</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="home">Доставка</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="#">Контакты</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="#">Галерея</Link>
        </li>
      </ul>
    </nav>
  );
}
  
export default Nav;