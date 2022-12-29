import { Link } from 'react-router-dom';
import Nav from './Header/Nav';
import Order from './Header/Order';

function Header() {
    return (
      <div className="header container">
        <Nav />
        <Link className="header__logo" to='/'><img src="../Logo.png" /></Link>
        <Order />
      </div>
    );
  }
  
  export default Header;