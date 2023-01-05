import './Checkout.css';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__form">
        <div className="checkout__wrapper">
          <h2 className="checkout__title">Оформление заказа</h2>
          <Input className="checkout__input" name="name" placeholder="Имя" maxlength={30}/>
          <Input className="checkout__input" name="phone" placeholder="Телефон" maxlength={11}/>
          <Input className="checkout__input" name="address" placeholder="Адрес доставки" maxlength={50}/>
          <div className="checkout__credit-card credit-card">
            <Input className="credit-card__input" name="cardHolderName" placeholder="CARDHOLDER NAME" maxlength={30}/>
            <Input className="credit-card__input" name="cardNumber" placeholder="1234 5678 9012 3456" maxlength={16}/>
            <div className="credit-card__expiration">
              <Input className="credit-card__input" name="cardDate" placeholder="MM / YY" maxlength={4}/>
              <Input className="credit-card__input" name="cardCVC" placeholder="CVC" maxlength={3}/>
            </div>
          </div>
        </div>
        <button className="checkout__button-close"></button>
        <Button className="checkout__button-confirm" button={true}>Подтвердить</Button>
      </div>
    </div>
  );
}

export default Checkout;