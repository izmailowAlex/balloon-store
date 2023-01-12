import React, { useRef, useState } from 'react'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import { ICheckoutProps } from '../../../interfaces/interface'
import './Checkout.css'

function Checkout ({ setPopupWindow }: ICheckoutProps): JSX.Element {
  const [errors, setErrors] = useState(true)
  const [confirm, setConfirm] = useState(false)
  const [errorName, setErrorName] = useState(false)
  const [errorPhone, setErrorPhone] = useState(false)
  const [errorAddress, setErrorAddress] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorCardholderName, setErrorCardholderName] = useState(false)
  const [errorCardNumber, setErrorCardNumber] = useState(false)
  const [errorCardDate, setErrorCardDate] = useState(false)
  const [errorCardCVC, setErrorCardCVC] = useState(false)
  const checkoutFieldsRef = useRef<HTMLDivElement>(null)

  function confirmOrderHandler (): void {
    const inputName = document.querySelector('[name=name]') as HTMLInputElement
    checkNameHandler(inputName.value)
    const inputPhone = document.querySelector('[name=phone]') as HTMLInputElement
    checkPhoneHandler(inputPhone.value)
    const inputAddress = document.querySelector('[name=address]') as HTMLInputElement
    checkAddressHandler(inputAddress.value)
    const inputEmail = document.querySelector('[name=email]') as HTMLInputElement
    checkEmailHandler(inputEmail.value)
    const inputCardholderName = document.querySelector('[name=cardHolderName]') as HTMLInputElement
    checkCardholderName(inputCardholderName.value)
    const inputCardNumber = document.querySelector('[name=cardNumber]') as HTMLInputElement
    checkCardNumber(inputCardNumber.value)
    const inputCardDate = document.querySelector('[name=cardDate]') as HTMLInputElement
    checkCardDate(inputCardDate.value)
    const inputCardCVC = document.querySelector('[name=cardCVC]') as HTMLInputElement
    checkCardCVC(inputCardCVC.value)

    if (errors) {
      setConfirm(false)
      console.log(errors)
    } else {
      setConfirm(true)
      console.log(errors)
    }
  }

  function checkNameHandler (value: string): void {
    const reg = /^[а-яА-Яa-zA-Z]+ [а-яА-Яa-zA-Z]+$/
    if (value.match(reg) !== null) {
      setErrors(false)
      setErrorName(false)
    } else {
      setErrors(true)
      setErrorName(true)
    }
  }

  function checkPhoneHandler (value: string): void {
    const reg = /^(8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/
    if (value.match(reg) !== null) {
      setErrors(false)
      setErrorPhone(false)
    } else {
      setErrors(true)
      setErrorPhone(true)
    }
  }

  function checkAddressHandler (value: string): void {
    const reg = /^([а-яА-Яa-zA-Z./ ]+), ([а-яА-Яa-zA-Z\d./ ]+), ([а-яА-Яa-zA-Z\d,./ ]+)$/
    if (value.match(reg) !== null) {
      setErrors(false)
      setErrorAddress(false)
    } else {
      setErrors(true)
      setErrorAddress(true)
    }
  }

  function checkEmailHandler (value: string): void {
    const reg = /^[A-Z\d._%+-]+@[A-Z\d-]+.[A-Z]{2,4}$/i
    if (value.match(reg) !== null) {
      setErrors(false)
      setErrorEmail(false)
    } else {
      setErrors(true)
      setErrorEmail(true)
    }
  }

  function checkCardholderName (value: string): void {
    const reg = /^[A-Z]+ [A-Z]+$/
    if (value.match(reg) !== null) {
      setErrors(false)
      setErrorCardholderName(false)
    } else {
      setErrors(true)
      setErrorCardholderName(true)
    }
  }

  function checkCardNumber (value: string): void {
    const reg = /^\d{16}$/
    if (value.match(reg) !== null) {
      setErrors(false)
      setErrorCardNumber(false)
    } else {
      setErrors(true)
      setErrorCardNumber(true)
    }
  }

  function checkCardDate (value: string): void {
    const reg = /^\d{2}\/\d{2}$/
    if (value.match(reg) !== null) {
      setErrors(false)
      setErrorCardDate(false)
    } else {
      setErrors(true)
      setErrorCardDate(true)
    }
  }

  function checkCardCVC (value: string): void {
    const reg = /^\d{3}$/
    if (value.match(reg) !== null) {
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
        {!confirm
          ? <div className="checkout__wrapper">
            <h2 className="checkout__title">Оформление заказа</h2>
            <div ref={checkoutFieldsRef} className="checkout__fields">
              <Input
                className="checkout__input"
                name="name"
                placeholder="Имя Фамилия"
                maxlength={30}
                error={errorName}
                errorMessage="Неверный формат Имени Фамилии"
                onBlur={(event) => { checkNameHandler(event.target.value) }}
              />
              <Input
                className="checkout__input"
                name="phone"
                placeholder="+375 (__) ___-__-__"
                maxlength={14}
                error={errorPhone}
                errorMessage="Неверный формат телефона"
                onBlur={(event) => { checkPhoneHandler(event.target.value) }}
              />
              <Input
                className="checkout__input"
                name="address"
                placeholder="г. Минск, ул. 50 лет Победы, д. 1"
                maxlength={100}
                error={errorAddress}
                errorMessage="Неверный формат адреса"
                onBlur={(event) => { checkAddressHandler(event.target.value) }}
              />
              <Input
                className="checkout__input"
                name="email"
                placeholder="email@example.com"
                maxlength={50}
                error={errorEmail}
                errorMessage="Неверный формат E-mail"
                onBlur={(event) => { checkEmailHandler(event.target.value) }}
              />
              <div className="checkout__credit-card credit-card">
                <Input
                  className="credit-card__input"
                  name="cardHolderName"
                  placeholder="CARDHOLDER NAME"
                  maxlength={30}
                  error={errorCardholderName}
                  errorMessage="Неверный формат держателя карты"
                  onBlur={(event) => { checkCardholderName(event.target.value) }}
                />
                <Input
                  className="credit-card__input"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  maxlength={16}
                  error={errorCardNumber}
                  errorMessage="Неверный формат номера карты"
                  onBlur={(event) => { checkCardNumber(event.target.value) }}
                />
                <div className="credit-card__expiration">
                  <Input
                    className="credit-card__input"
                    name="cardDate"
                    placeholder="MM / YY"
                    maxlength={5}
                    error={errorCardDate}
                    errorMessage="Неверная дата"
                    onBlur={(event) => { checkCardDate(event.target.value) }}
                  />
                  <Input
                    className="credit-card__input"
                    name="cardCVC"
                    placeholder="CVC"
                    maxlength={3}
                    error={errorCardCVC}
                    errorMessage="Неверный CVC"
                    onBlur={(event) => { checkCardCVC(event.target.value) }}
                  />
                </div>
              </div>
            </div>
            <Button
              className="checkout__button-confirm"
              onClick={confirmOrderHandler}
            >
              Подтвердить
            </Button>
          </div>
          : <div className="checkout__wrapper">
            <h2 className="checkout__title">Заказ подтвержден</h2>
            <Button
              className="checkout__button-confirm"
              onClick={() => { setPopupWindow(false) }}
            >
              Продолжить покупки
            </Button>
          </div>
        }
        <button
          className="checkout__button-close"
          onClick={() => { setPopupWindow(false) }}
        ></button>
      </div>
    </div>
  )
}

export default Checkout
