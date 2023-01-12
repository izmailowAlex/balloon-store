import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../../../App'
import { CatalogContext } from '../../Catalog'
import { IProduct } from '../../../../../interfaces/interface'
import Checkbox from '../../../../UI/Checkbox/Checkbox'
import Dualslider from '../../../../UI/Dualslider/Dualslider'
import './Filter.css'

interface IFilterCategories {
  category?: string[]
  type?: string[]
  color?: string[]
}

function Filter (): JSX.Element {
  const [currentindex, setCurrentIndex] = useState(0)
  const [allCategories, setAllCategories] = useState<string[]>([])
  const [allTypes, setAllTypes] = useState<string[]>([])
  const [allColors, setAllColors] = useState<string[]>([])
  const { productsLibrary } = useContext(AppContext)
  const { setFilteredList } = useContext(CatalogContext)
  const [filters, setFilters] = useState<IFilterCategories>({})

  useEffect(() => {
    if (productsLibrary.length > 0) {
      let typesTmp: string[] = []
      productsLibrary.forEach((item: IProduct) => {
        typesTmp.push(item.type)
      })
      typesTmp = typesTmp.filter((item, index, array) => {
        setCurrentIndex(index + 1)
        return array.indexOf(item) === index
      })
      setAllTypes(typesTmp)

      let categoriesTmp: string[] = []
      productsLibrary.forEach((item: IProduct) => {
        categoriesTmp.push(item.category)
      })
      categoriesTmp = categoriesTmp.filter((item, index, array) => {
        setCurrentIndex(index + 1)
        return array.indexOf(item) === index
      })
      setAllCategories(categoriesTmp)

      let colorsTmp: string[] = []
      productsLibrary.forEach((item: IProduct) => {
        colorsTmp.push(item.color)
      })
      colorsTmp = colorsTmp.filter((item, index, array) => {
        setCurrentIndex(index + 1)
        return array.indexOf(item) === index
      })
      setAllColors(colorsTmp)
    }
  }, [currentindex, setCurrentIndex])

  useEffect(() => {
    applyFilter()
  }, [filters])

  function onChangeHandler (event: ChangeEvent<HTMLInputElement>, item: string, key: keyof IFilterCategories): void {
    const tempFilters: IFilterCategories = { ...filters }
    if (event.target.checked) {
      if (tempFilters[key] !== undefined) {
        tempFilters[key]?.push(item)
      } else {
        tempFilters[key] = [item]
      }
    } else {
      tempFilters[key] = tempFilters[key]?.filter(
        (element: string) => element !== item
      )
      if (tempFilters[key]?.length === 0) {
        delete tempFilters[key]
      }
    }
    setFilters({ ...tempFilters })
  }

  function applyFilter (): void {
    const tempFilteredList = productsLibrary.filter((item) => {
      let key: keyof IFilterCategories
      for (key in filters) {
        const includes = filters[key]?.includes(item[key])
        if (includes === false) {
          return false
        }
      }
      return true
    })
    setFilteredList([...tempFilteredList])
  }

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
                  onChange={(event) => { onChangeHandler(event, item, 'category') }}
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
                  onChange={(event) => { onChangeHandler(event, item, 'type') }}
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
                  onChange={(event) => { onChangeHandler(event, item, 'color') }}
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
