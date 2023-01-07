import { useContext } from "react";
import { CatalogContext } from "../Catalog";
import Card from "./Card/Card";

function CatalogListCards() {
  const { currentList } = useContext(CatalogContext);
  console.log(currentList);

  return(
    <div className="catalog-list">
    {
      currentList.map((product, index) => {
        return (
          <Card key={index} product={product}/>
        )
      })
    }
    </div>
  )
}

export default CatalogListCards;