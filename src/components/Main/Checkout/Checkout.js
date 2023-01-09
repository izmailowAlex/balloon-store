import './Checkout.css'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import { useState } from 'react'

function Checkout ({ setPopupWindow }) {
  const [errorName, setErrorName] = useState(false)
  const [errorPhone, setErrorPhone] = useState(false)
  const [errorAddress, setErrorAddress] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorCardholderName, setErrorCardholderName] = useState(false)
  const [errorCardNumber, setErrorCardNumber] = useState(false)
  const [errorCardDate, setErrorCardDate] = useState(false)
  const [errorCardCVC, setErrorCardCVC] = useState(false)

  function confirmOrderHandler() {
    console.log('Confirm Order')
  }

  function checkNameHandler(value) {
    const reg = /^[а-яА-Яa-zA-Z]+ [а-яА-Яa-zA-Z]+$/
    if (String(value).match(reg)) {
      setErrorName(false)
    } else {
      setErrorName(true)
    }
  }

  function checkPhoneHandler(value) {
    const reg =
      /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/
    if (String(value).match(reg)) {
      setErrorPhone(false)
    } else {
      setErrorPhone(true)
    }
  }

  function checkAddressHandler(value) {
    const reg = /^[а-яА-Яa-zA-Z\d,./ ]+$/
    if (String(value).match(reg)) {
      setErrorAddress(false)
    } else {
      setErrorAddress(true)
    }
  }

  function checkEmailHandler(value) {
    const reg = /^[A-Z\d._%+-]+@[A-Z\d-]+.[A-Z]{2,4}$/i
    if (String(value).match(reg)) {
      setErrorEmail(false)
    } else {
      setErrorEmail(true)
    }
  }

  function checkCardholderName(value) {
    const reg = /^[A-Z]+ [A-Z]+$/
    if (String(value).match(reg)) {
      setErrorCardholderName(false)
    } else {
      setErrorCardholderName(true)
    }
  }

  function checkCardNumber(value) {
    const reg = /^\d{16}$/
    if (String(value).match(reg)) {
      setErrorCardNumber(false)
    } else {
      setErrorCardNumber(true)
    }
  }

  function checkCardDate(value) {
    const reg = /^\d{2}\/\d{2}$/
    if (String(value).match(reg)) {
      setErrorCardDate(false)
    } else {
      setErrorCardDate(true)
    }
  }

  function checkCardCVC(value) {
    const reg = /^\d{3}$/
    if (String(value).match(reg)) {
      setErrorCardCVC(false)
    } else {
      setErrorCardCVC(true)
    }
  }

  return (
    <div className="checkout">
      <div className="checkout__form">
        <div className="checkout__wrapper">
          <h2 className="checkout__title">Оформление заказа</h2>
          <Input
            className="checkout__input"
            name="name"
            placeholder="Имя Фамилия"
            maxlength={30}
            error={errorName}
            errorMessage="Неверный формат имени"
            onBlur={(event) => checkNameHandler(event.target.value)}
          />
          <Input
            className="checkout__input"
            name="phone"
            placeholder="Телефон"
            maxlength={14}
            error={errorPhone}
            errorMessage="Неверный формат телефона"
            onBlur={(event) => checkPhoneHandler(event.target.value)}
          />
          <Input
            className="checkout__input"
            name="address"
            placeholder="Адрес доставки"
            maxlength={100}
            error={errorAddress}
            errorMessage="Неверный формат адреса"
            onBlur={(event) => checkAddressHandler(event.target.value)}
          />
          <Input
            className="checkout__input"
            name="email"
            placeholder="E-mail"
            maxlength={50}
            error={errorEmail}
            errorMessage="Неверный формат E-mail"
            onBlur={(event) => checkEmailHandler(event.target.value)}
          />
          <div className="checkout__credit-card credit-card">
            <Input
              className="credit-card__input"
              name="cardHolderName"
              placeholder="CARDHOLDER NAME"
              maxlength={30}
              error={errorCardholderName}
              errorMessage="Неверный формат держателя карты"
              onBlur={(event) => checkCardholderName(event.target.value)}
            />
            <Input
              className="credit-card__input"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              maxlength={16}
              error={errorCardNumber}
              errorMessage="Неверный формат номера карты"
              onBlur={(event) => checkCardNumber(event.target.value)}
            />
            <div className="credit-card__expiration">
              <Input
                className="credit-card__input"
                name="cardDate"
                placeholder="MM / YY"
                maxlength={5}
                error={errorCardDate}
                errorMessage="Неверная дата"
                onBlur={(event) => checkCardDate(event.target.value)}
              />
              <Input
                className="credit-card__input"
                name="cardCVC"
                placeholder="CVC"
                maxlength={3}
                error={errorCardCVC}
                errorMessage="Неверный CVC"
                onBlur={(event) => checkCardCVC(event.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          className="checkout__button-close"
          onClick={() => {
            setPopupWindow(false)
          }}
        ></button>
        <Button
          className="checkout__button-confirm"
          button={true}
          onClick={() => confirmOrderHandler()}
        >
          Подтвердить
        </Button>
      </div>
    </div>
  )
}

export default Checkout
