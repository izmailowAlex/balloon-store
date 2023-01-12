import React, { useContext } from 'react'
import { CatalogContext } from '../Catalog'
import Card from './Card/Card'

function CatalogListCards (): JSX.Element {
  const { filteredList } = useContext(CatalogContext)

  return (
    <div className="catalog-list">
      {filteredList.map((product, index) => {
        return <Card key={index} product={product} />
      })}
    </div>
  )
}

export default CatalogListCards
