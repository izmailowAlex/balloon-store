import { Routes, Route } from 'react-router-dom';

import Home from './Main/Home';
import Catalog from './Main/Catalog';

function Main() {
  return (
    <div className="main container">
        <Routes>
            <Route path='/home/' element={<Home />} />
            <Route path='/catalog/' element={<Catalog />} />
        </Routes>
    </div>
  );
}

export default Main;