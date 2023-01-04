import './Cart.css';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Checkbox from "../UI/Checkbox/Checkbox";
import Product from "../Product/Product";

function Cart() {
  return (
    <div className="cart">
      <h2 className="cart__title">Корзина</h2>
      <div className="cart__content">
        <div className="cart__table">
          <div className="cart__list-head">
            <span className="cart__select-all"><Checkbox /></span>
            <a className="cart__cart-clear" href="#">Очистить корзину</a>
          </div>
          <ul className="cart__list">
            <li className="cart__item"><Product name="Шар (22''/56 см) Фигура, Крутой Кот, 1 шт." image="../../images/cat.png" price={5} count={1}/></li>
            <li className="cart__item"><Product name="Шар (22''/56 см) Фигура, Крутой Кот, 1 шт." image="../../images/cat.png" price={5} count={5}/></li>
            <li className="cart__item"><Product name="Шар (22''/56 см) Фигура, Крутой Кот, 1 шт." image="../../images/cat.png" price={5} count={10}/></li>
            <li className="cart__item"><Product name="Шар (22''/56 см) Фигура, Крутой Кот, 1 шт." image="../../images/cat.png" price={5} count={20}/></li>
          </ul>
        </div>
        <div className="cart__summary">
          <h3 className="cart__summary-title">Итого:</h3>
          <p className="cart__amount">800</p>
          <Input className="cart__promocode" name="promocode" placeholder="Введите промокод" maxlength={8}/>
          <Button className="cart__checkout" button={true}>Оформить заказ</Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;