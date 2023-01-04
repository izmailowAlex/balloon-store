import Counter from '../../../../UI/Counter/Counter';
import './Card.css';

function Card({product}) {
  return (
    <div className="card">
      <div className="card__image-wrapper">
        <img className="card__image" src={product.src} alt=""/>
      </div>
      <div className="card__title">{product.title}</div>
      <div className="card__controls">
        <h3 className="card__price">{product.price} ₽</h3>
        <Counter count={product.count}/>
        <button className="card__button"></button>
      </div>
    </div>
  )
}

export default Card;