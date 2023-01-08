import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Catalog from './Catalog/Catalog';
import Cart from './Cart/Cart';
import ProductView from './ProductView/ProductView';
import Checkout from "./Checkout/Checkout";
import Page404 from "./Page404/Page404";
import './Main.css';

function Main() {
  return (
    <main className="main">
      <div className="main__container container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog/' element={<Catalog />} />
          <Route path='/cart/' element={<Cart />} />
          <Route path='/productview/:number' element={<ProductView />} />
          <Route path='/checkout/' element={<Checkout />} />
          <Route path='/page404/' element={<Page404 />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;