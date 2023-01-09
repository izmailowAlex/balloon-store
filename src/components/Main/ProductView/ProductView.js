import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../../App'
import './ProductView.css'
import Counter from '../../UI/Counter/Counter'
import Button from '../../UI/Button/Button'

function ProductView () {
  const productID = useParams()

  const { productsLibrary, setProductsLibrary } = useContext(AppContext)
  const currentProduct = productsLibrary.find(
    (item) => item.id === productID.number
  )

  return (
    <div className="product-view">
      <div className="product-view__image-container">
        <img
          className="product-view__image"
          src="../../images/cat-full.png"
          alt="Cat"
        />
      </div>
      <div className="product-view__content">
        <h2 className="product-view__title">{currentProduct.title}</h2>
        <span className="product-view__tag product-view__tag_instock">
          {currentProduct.instock}
        </span>
        <div className="product-view__price">
          <span className="product-view__current-price">
            {currentProduct.price}
          </span>
          <span className="product-view__old-price">
            {currentProduct.oldPrice}
          </span>
        </div>
        <div className="product-view__control-group">
          <span className="product-view__quantity">
            <Counter count={currentProduct.count} min={1} max={100} />
          </span>
          <Button className="product-view__to-cart-button" button={true}>
            В корзину
          </Button>
        </div>
        <div className="product-view__description">
          <div className="product-view__description-title">
            {currentProduct.text}
          </div>
          <ul className="product-view__description-list">
            <li className="product-view__description-item">
              <span className="product-view__property">Производитель:</span>
              <span className="product-view__value">Falali</span>
            </li>
            <li className="product-view__description-item">
              <span className="product-view__property">Страна:</span>
              <span className="product-view__value">Китай</span>
            </li>
            <li className="product-view__description-item">
              <span className="product-view__property">Артикул:</span>
              <span className="product-view__value">21765</span>
            </li>
            <li className="product-view__description-item">
              <span className="product-view__property">Размер:</span>
              <span className="product-view__value">22” (56 см)</span>
            </li>
            <li className="product-view__description-item">
              <span className="product-view__property">Единиц в упаковке:</span>
              <span className="product-view__value">1</span>
            </li>
            <li className="product-view__description-item">
              <span className="product-view__property">Единиц в коробке:</span>
              <span className="product-view__value">100</span>
            </li>
            <li className="product-view__description-item">
              <span className="product-view__property">Вес:</span>
              <span className="product-view__value">0,022 кг</span>
            </li>
            <li className="product-view__description-item">
              <span className="product-view__property">Габариты:</span>
              <span className="product-view__value">56×28×0,01 см</span>
            </li>
            <li className="product-view__description-item">
              <span className="product-view__property">Кратность продаж:</span>
              <span className="product-view__value">1</span>
            </li>
          </ul>
        </div>
        <div className="product-view__description">
          <div className="product-view__description-title">Описание</div>
          <p className="product-view__description-text">
            Фольгированный шар в виде фигуры для украшения праздника,
            приспособлен под гелий. Фольгированные воздушные шары
            изготавливаются из тонкой миларовой пленки, позволяющей шару не
            сдуваться в течение нескольких дней. Фольгированные воздушные шары
            надувают через клапан. Поэтому плотно надутый шар завязывать не
            требуется - обратный клапан хорошо удерживает гелий внутри шара. К
            шару привязывают ленту только для того, чтобы шар не улетел.
            Сдувшийся фольгированный шар можно поддуть гелием или воздухом и он
            всегда будет иметь товарный вид.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductView
