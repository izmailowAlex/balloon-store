import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../../../App'
import { CatalogContext } from '../../Catalog'
import { IItem } from '../../../../../interfaces/interface'
import Checkbox from '../../../../UI/Checkbox/Checkbox'
import Dualslider from '../../../../UI/Dualslider/Dualslider'
import './Filter.css'

function Filter () {
  const [currentindex, setCurrentIndex] = useState(0)
  const [allCategories, setAllCategories] = useState<string[]>([])
  const [allTypes, setAllTypes] = useState<string[]>([])
  const [allColors, setAllColors] = useState<string[]>([])
  const { productsLibrary } = useContext(AppContext)
  const { setFilteredList } = useContext(CatalogContext)
  const [filters, setFilters] = useState({})

  useEffect(() => {
    if (productsLibrary && productsLibrary.length > 0) {
      let typesTmp: string[] = []
      productsLibrary.forEach((item: IItem) => {
        typesTmp.push(item.type)
      })
      typesTmp = typesTmp.filter((item, index, array) => {
        setCurrentIndex(index + 1)
        return array.indexOf(item) === index
      })
      setAllTypes(typesTmp)

      let categoriesTmp: string[] = []
      productsLibrary.forEach((item: IItem) => {
        categoriesTmp.push(item.category)
      })
      categoriesTmp = categoriesTmp.filter((item, index, array) => {
        setCurrentIndex(index + 1)
        return array.indexOf(item) === index
      })
      setAllCategories(categoriesTmp)

      let colorsTmp: string[] = []
      productsLibrary.forEach((item: IItem) => {
        colorsTmp.push(item.color)
      })
      colorsTmp = colorsTmp.filter((item, index, array) => {
        setCurrentIndex(index + 1)
        return array.indexOf(item) === index
      })
      setAllColors(colorsTmp)
    }
  }, [currentindex, setCurrentIndex])

  function onChangeHandler(event, item, category) {
    const tempFilters = { ...filters }
    if (event.target.checked === true) {
      if (tempFilters[category]) {
        tempFilters[category].push(item)
      } else {
        tempFilters[category] = [item]
      }
    } else {
      tempFilters[category] = tempFilters[category].filter(
        (element) => element !== item
      )
      if (tempFilters[category].length === 0) {
        delete tempFilters[category]
      }
    }
    setFilters({ ...tempFilters })
  }

  function applyFilter() {
    const tempFilteredList = productsLibrary.filter((item) => {
      for (let key in filters) {
        if (!filters[key].includes(item[key])) {
          return false
        }
      }
      return true
    })
    setFilteredList([...tempFilteredList])
  }

  useEffect(() => {
    applyFilter()
  }, [filters])

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
              <li key={index} className="list__item">
                <Checkbox
                  onChange={(event) => onChangeHandler(event, item, 'category')}
                >
                  {item}
                </Checkbox>
              </li>
            )
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
              <li key={index} className="list__item">
                <Checkbox
                  onChange={(event) => onChangeHandler(event, item, 'type')}
                >
                  {item}
                </Checkbox>
              </li>
            )
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
              <li key={index} className="list__item">
                <Checkbox
                  className={`checkbox_colors checkbox_${item}`}
                  onChange={(event) => onChangeHandler(event, item, 'color')}
                ></Checkbox>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Filter
