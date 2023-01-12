import React, { useState, useContext } from 'react'
import { AppContext } from '../../../App'
import Filter from './CatalogListCards/Filter/Filter'
import CatalogListCards from './CatalogListCards/CatalogListCards'
import './Catalog.css'
import { IProduct } from '../../../interfaces/interface'

interface ICatalogContext {
  filteredList: IProduct[]
}

export const CatalogContext = React.createContext({} as ICatalogContext)

function Catalog (): JSX.Element {
  const { productsLibrary } = useContext(AppContext)
  const [filteredList, setFilteredList] = useState<IProduct[]>(productsLibrary)
  return (
    <div className="main__catalog">
      <h2 className="main__catalog-title">Каталог шаров</h2>
      <div className="main__catalog-contain">
        <CatalogContext.Provider value={{ filteredList }}>
          <Filter />
          <CatalogListCards />
        </CatalogContext.Provider>
      </div>
    </div>
  )
}

export default Catalog
