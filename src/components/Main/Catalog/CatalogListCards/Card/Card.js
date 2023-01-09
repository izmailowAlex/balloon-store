import React from 'react'
import { Link } from 'react-router-dom'
import Counter from '../../../../UI/Counter/Counter'
import './Card.css'

function Card ({ /* eslint-disable react/prop-types */product }) {
  return (
    <div className="card">
      <div className="card__image-wrapper">
        <img className="card__image" src={`../images/${product.image}`} alt=""/>
      </div>
      <div className="card__controls">
        <h3 className="card__price">{product.price} ₽</h3>
        <Counter count={product.count} min={product.min} max={product.max}/>
        <button className="card__button"></button>
      </div>
    </div>
  )
}

export default Card
