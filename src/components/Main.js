import { Routes, Route } from 'react-router-dom';

import Home from './Main/Home';
import Catalog from './Main/Catalog';
import Cart from './Main/Cart';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <div className="main__container container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog/' element={<Catalog />} />
          <Route path='/cart/' element={<Cart />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;