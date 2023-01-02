import { Link } from 'react-router-dom';
import Nav from './Header/Nav';
import Order from './Header/Order';
import Logo from '../images/logo.svg';

function Header() {
  return (
    <div className="header container">
      <Nav />
      <Link className="header__logo" to='/'><img src={Logo} alt="Balloon Logo"/></Link>
      <Order />
    </div>
  );
}
  
export default Header;