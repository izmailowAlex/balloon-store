import { useContext } from "react";
import { AppContext } from "../../../../App";
import Card from "./Card/Card";

function CatalogListCards() {
  const {productsLibrary, setProductsLibrary} = useContext(AppContext);

  return(
    <div className="catalog-list">
    {
      productsLibrary.map((product, index) => {
        return (
          <Card key={index} product={product}/>
        )
      })
    }
    </div>
  )
}

export default CatalogListCards;