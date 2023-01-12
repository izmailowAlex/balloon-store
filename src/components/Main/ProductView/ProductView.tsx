import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../../App'
import Counter from '../../UI/Counter/Counter'
import Button from '../../UI/Button/Button'
import './ProductView.css'

function ProductView (): JSX.Element {
  const productID = useParams()

  const { productsLibrary } = useContext(AppContext)
  const currentProduct = productsLibrary.find((item) => item.id === productID.number)
  if (currentProduct === undefined) {
    return <></>
  }

  return (
    <div className='product-view'>
      <div className='product-view__image-container'>
        <img className='product-view__image' src={`../../images/${currentProduct.image}`} alt={currentProduct.title}/>
      </div>
      <div className='product-view__content'>
        <h2 className='product-view__title'>{currentProduct.title}</h2>
        {currentProduct.instock
          ? <span className='product-view__tag product-view__tag_instock'>В наличии</span>
          : <span className='product-view__tag product-view__tag_outstock'>Нет в наличии</span>
        }
        <div className='product-view__price'>
          <span className='product-view__current-price'>{currentProduct.price}</span>
          {currentProduct.discount
            ? <span className='product-view__old-price'>{Math.round(currentProduct.price * ((currentProduct.discount + 100) / 100))}</span>
            : ''
          }
        </div>
        <div className='product-view__control-group'>
          <span className='product-view__quantity'><Counter count={currentProduct.count} min={currentProduct.min} max={currentProduct.max}/></span>
          <Button className='product-view__to-cart-button'>В корзину</Button>
        </div>
        <div className='product-view__description'>
          <div className='product-view__description-title'>Характеристики</div>
          <ul className='product-view__description-list'>
            <li className='product-view__description-item'>
              <span className='product-view__property'>Артикул:</span>
              <span className='product-view__value'>{currentProduct.id}</span>
            </li>
            <li className='product-view__description-item'>
              <span className='product-view__property'>Размер:</span>
              <span className='product-view__value'>{currentProduct.size}</span>
            </li>
            <li className='product-view__description-item'>
              <span className='product-view__property'>Производитель:</span>
              <span className='product-view__value'>{currentProduct.producer}</span>
            </li>
            <li className='product-view__description-item'>
              <span className='product-view__property'>Страна:</span>
              <span className='product-view__value'>{currentProduct.country}</span>
            </li>
          </ul>
        </div>
        <div className='product-view__description'>
          <div className='product-view__description-title'>Описание</div>
          <p className='product-view__description-text'>{currentProduct.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductView
