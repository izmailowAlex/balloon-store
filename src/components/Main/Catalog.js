import Filter from "./CatalogParts/Filter";
import CatalogListCards from "./CatalogParts/CatalogListCards";
import './Catalog.css';

function Catalog() {
  return (
    <div className="main__catalog">
      <h2 className="main__catalog-title">Каталог шаров</h2>
      <div className="main__catalog-contain">
        <Filter />
        <CatalogListCards />
      </div>
    </div>
  );
}

export default Catalog;