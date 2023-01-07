import React, { useState, useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../../../App";
import Filter from "./CatalogListCards/Filter/Filter";
import CatalogListCards from "./CatalogListCards/CatalogListCards";
import './Catalog.css';

export const CatalogContext = React.createContext();

function Catalog() {
  const {productsLibrary, setProductsLibrary} = useContext(AppContext);
  const [productCategory, setProductCategory] = useSearchParams();
  const [currentList, setCurrentList] = useState(productsLibrary);
  const categoryQuery = productCategory.get('category') || '';
  const [listCheckedFilter, setListCheckedFilter] = useState({category: [], type: [], color: []});

  function onChangeHandler(event, item, category) {
    console.log('start')
    const filterCheckedTmp = listCheckedFilter;
    if (category === 'category') {
      if (event.target.checked === false) {
        filterCheckedTmp.category = filterCheckedTmp.category.filter(i => i !== item);
      } else {
        filterCheckedTmp.category.push(item)
      }
    } else if (category === 'type') {
      if (event.target.checked === false) {
        filterCheckedTmp.type = filterCheckedTmp.type.filter(i => i !== item);
      } else {
        filterCheckedTmp.type.push(item)
      }
    } else if (category === 'color') {
      if (event.target.checked === false) {
        filterCheckedTmp.color = filterCheckedTmp.color.filter(i => i !== item);
      } else {
        filterCheckedTmp.color.push(item)
      }
    }
    console.log('finish')
    setListCheckedFilter([...filterCheckedTmp]);
    applyFilter();
  }

  function applyFilter() {
    const filteredList = productsLibrary.filter((item) => {
      for (let key in listCheckedFilter) {
        if (!listCheckedFilter[key].includes(item[key])) {
          return false;
        }
      }
      return true;
    });
    setCurrentList([...filteredList]);
  }

  return (
    <div className="main__catalog">
      <h2 className="main__catalog-title">Каталог шаров</h2>
      <div className="main__catalog-contain">
        <CatalogContext.Provider value={{ currentList, onChangeHandler }}>
          <Filter />
          <CatalogListCards />
        </CatalogContext.Provider>
      </div>
    </div>
  );
}

export default Catalog;