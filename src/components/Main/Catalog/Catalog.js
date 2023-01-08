import React, { useState, useContext } from "react";
import { AppContext } from "../../../App";
import Filter from "./CatalogListCards/Filter/Filter";
import CatalogListCards from "./CatalogListCards/CatalogListCards";
import './Catalog.css';

export const CatalogContext = React.createContext();

function Catalog() {
  const { productsLibrary } = useContext(AppContext);
  const [filteredList, setFilteredList] = useState(productsLibrary);
  return (
    <div className="main__catalog">
      <h2 className="main__catalog-title">Каталог шаров</h2>
      <div className="main__catalog-contain">
        <CatalogContext.Provider value={{ filteredList, setFilteredList }}>
          <Filter />
          <CatalogListCards />
        </CatalogContext.Provider>
      </div>
    </div>
  );
}

export default Catalog;