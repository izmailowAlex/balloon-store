import { Routes, Route } from 'react-router-dom';
import Home from './Main/Home';
import Catalog from './Main/Catalog';
import Cart from './Main/Cart';
import ProductView from './Main/ProductView';
import Checkout from "./Main/Checkout";
import Page404 from "./Main/Page404";
import './Main.css';

function Main() {
  return (
    <main className="main">
      <div className="main__container container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog/' element={<Catalog />} />
          <Route path='/cart/' element={<Cart />} />
          <Route path='/productview/' element={<ProductView />} />
          <Route path='/checkout/' element={<Checkout />} />
          <Route path='/page404/' element={<Page404 />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;