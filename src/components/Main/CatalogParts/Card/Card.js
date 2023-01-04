import Counter from './../../../UI/Counter/Counter'

function Card({product}) {
  return (
    <div className="list__card">
      <div className="list__card_image">
        <img className="list__card_image-img" src={product.src} alt=""/>
      </div>
      <div className="list__card_description">{product.title}</div>
      <div className="list__card_bottom">
        <h3 className="list__card_bottom-price">{product.price} ₽</h3>
        <Counter count={product.count}/>
        <button className="list__cart-button"></button>
      </div>
    </div>
  )
}

export default Card;