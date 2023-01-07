import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../../../App';
import Checkbox from '../../../../UI/Checkbox/Checkbox';
import Dualslider from "../../../../UI/Dualslider/Dualslider";
import './Filter.css';

function Filter({onChangeHandler}) {
  const {productsLibrary, setProductsLibrary} = useContext(AppContext);
  const [currentindex, setCurrentIndex] = useState(0);
  const [allCategories, setAllCategories] = useState([]);
  const [allTypes, setAllTypes] = useState([]);
  const [allColors, setAllColors] = useState([]);

  useEffect(() => {
    if (productsLibrary && productsLibrary.length > 0) {
      let typesTmp = [];
      productsLibrary.forEach((item) => {
        typesTmp.push(item.type);
      })
      typesTmp = typesTmp.filter((item, index, array) => {
        setCurrentIndex(index+1)
        return array.indexOf(item) === index
      })
      setAllTypes(typesTmp);

      let categoriesTmp = [];
      productsLibrary.forEach((item) => {
        categoriesTmp.push(item.category);
      })
      categoriesTmp = categoriesTmp.filter((item, index, array) => {
        setCurrentIndex(index+1)
        return array.indexOf(item) === index
      })
      setAllCategories(categoriesTmp);

      let colorsTmp = [];
      productsLibrary.forEach((item) => {
        colorsTmp.push(item.color);
      })
      colorsTmp = colorsTmp.filter((item, index, array) => {
        setCurrentIndex(index+1)
        return array.indexOf(item) === index
      })
      setAllColors(colorsTmp);
    }
  }, [currentindex, setCurrentIndex]);

  return (
    <div className="main__catalog-filter filter">
      <div className="filter__block">
        <div className="filter__category">
          <span className="filter__block_category-title">Price, $</span>
          <span className="filter__block_category-vector"></span>
        </div>
        <Dualslider min={0} max={1000} />
      </div>
      <div className="filter__block">
        <div className="filter__category">
          <span className="filter__block_category-title">Categories</span>
          <span className="filter__block_category-vector active"></span>
        </div>
        <ul className="filter__block_list">
          {allCategories.map((item, index) => {
            return (
            <li key={index} className="list__item" >
              <Checkbox onChange={(event) => onChangeHandler(event, item, "category")}>{item}</Checkbox>
            </li>)
          })}
        </ul>
      </div>
      <div className="filter__block">
        <div className="filter__category">
          <span className="filter__block_category-title">Materials</span>
          <span className="filter__block_category-vector"></span>
        </div>
        <ul className="filter__block_list">
          {allTypes.map((item, index) => {
            return (
            <li key={index} className="list__item" >
              <Checkbox onChange={(event) => onChangeHandler(event, item, "type")}>{item}</Checkbox>
            </li>)
          })}
        </ul>
      </div>
      <div className="filter__block">
        <div className="filter__category">
          <span className="filter__block_category-title">Colors</span>
          <span className="filter__block_category-vector"></span>
        </div>
        <ul className="filter__block_list-colors">
          {allColors.map((item, index) => {
            return (
            <li key={index} className="list__item" >
              <Checkbox className={`checkbox_colors checkbox_${item}`} onChange={(event) => onChangeHandler(event, item, "color")}></Checkbox>
            </li>)
          })}
        </ul>
      </div>
    </div>
  );
}

export default Filter;