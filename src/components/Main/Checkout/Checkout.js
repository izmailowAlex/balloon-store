import React, { useEffect, useRef, useState } from 'react'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import './Checkout.css'

function Checkout ({ setPopupWindow }) {
  const [errors, setErrors] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [errorName, setErrorName] = useState(false)
  const [errorPhone, setErrorPhone] = useState(false)
  const [errorAddress, setErrorAddress] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorCardholderName, setErrorCardholderName] = useState(false)
  const [errorCardNumber, setErrorCardNumber] = useState(false)
  const [errorCardDate, setErrorCardDate] = useState(false)
  const [errorCardCVC, setErrorCardCVC] = useState(false)

  const checkoutFieldsRef = useRef(null)

  function confirmOrderHandler () {
    checkNameHandler(document.querySelector('[name=name]').value)
    checkPhoneHandler(document.querySelector('[name=phone]').value)
    checkAddressHandler(document.querySelector('[name=address]').value)
    checkEmailHandler(document.querySelector('[name=email]').value)
    checkCardholderName(document.querySelector('[name=cardHolderName]').value)
    checkCardNumber(document.querySelector('[name=cardNumber]').value)
    checkCardDate(document.querySelector('[name=cardDate]').value)
    checkCardCVC(document.querySelector('[name=cardCVC]').value)
    if (errors === true) {
      setConfirm(false)
      console.log(errors)
    } else {
      setConfirm(true)
      console.log(errors)
    }
  }

  function checkNameHandler (value) {
    const reg = /^[а-яА-Яa-zA-Z]+ [а-яА-Яa-zA-Z]+$/
    if (String(value).match(reg)) {
      setErrors(false)
      setErrorName(false)
    } else {
      setErrors(true)
      setErrorName(true)
    }
  }

  function checkPhoneHandler (value) {
    const reg = /^(8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/
    if (String(value).match(reg)) {
      setErrors(false)
      setErrorPhone(false)
    } else {
      setErrors(true)
      setErrorPhone(true)
    }
  }

  function checkAddressHandler (value) {
    const reg = /^[а-яА-Яa-zA-Z\d,./ ]+$/
    if (String(value).match(reg)) {
      setErrors(false)
      setErrorAddress(false)
    } else {
      setErrors(true)
      setErrorAddress(true)
    }
  }

  function checkEmailHandler (value) {
    const reg = /^[A-Z\d._%+-]+@[A-Z\d-]+.[A-Z]{2,4}$/i
    if (String(value).match(reg)) {
      setErrors(false)
      setErrorEmail(false)
    } else {
      setErrors(true)
      setErrorEmail(true)
    }
  }

  function checkCardholderName (value) {
    const reg = /^[A-Z]+ [A-Z]+$/
    if (String(value).match(reg)) {
      setErrors(false)
      setErrorCardholderName(false)
    } else {
      setErrors(true)
      setErrorCardholderName(true)
    }
  }

  function checkCardNumber (value) {
    const reg = /^\d{16}$/
    if (String(value).match(reg)) {
      setErrors(false)
      setErrorCardNumber(false)
    } else {
      setErrors(true)
      setErrorCardNumber(true)
    }
  }

  function checkCardDate (value) {
    const reg = /^\d{2}\/\d{2}$/
    if (String(value).match(reg)) {
      setErrors(false)
      setErrorCardDate(false)
    } else {
      setErrors(true)
      setErrorCardDate(true)
    }
  }

  function checkCardCVC (value) {
    const reg = /^\d{3}$/
    if (String(value).match(reg)) {
      setErrors(false)
      setErrorCardCVC(false)
    } else {
      setErrors(true)
      setErrorCardCVC(true)
    }
  }

  return (
    <div className="checkout">
      <div className="checkout__form">
        {confirm === false
          ? <div className="checkout__wrapper">
            <h2 className="checkout__title">Оформление заказа</h2>
            <div ref={checkoutFieldsRef} className="checkout__fields">
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
            <Button
              className="checkout__button-confirm"
              button={true}
              onClick={confirmOrderHandler}
            >
              Подтвердить
            </Button>
          </div>
          : <div className="checkout__wrapper">
            <h2 className="checkout__title">Заказ подтвержден</h2>
            <Button
              className="checkout__button-confirm"
              button={true}
              onClick={() => setPopupWindow(false)}
            >
              В каталог
            </Button>
          </div>

        }
        <button
          className="checkout__button-close"
          onClick={() => {
            setPopupWindow(false)
          }}
        ></button>
      </div>
    </div>
  )
}

export default Checkout

function Form () {
  return (
    <></>
  )
}

function Confirm () {
  return (
    <></>
  )
}
