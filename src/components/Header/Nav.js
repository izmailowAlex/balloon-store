import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="header__nav">
            <ul className="header__nav-list">
                <li><Link to="catalog">Каталог</Link></li>
                <li><Link to="home">Доставка</Link></li>
                <li><Link to="#">Контакты</Link></li>
                <li><Link to="#">Галерея</Link></li>
            </ul>
        </nav>
    );
}
  
export default Header;