import { useState, useRef } from 'react'
import './Counter.css'

function Counter ({ count, min, max }) {
  let [currentVal, setCurrentVal] = useState(Number(count))
  const inputRef = useRef(null)

  function increment () {
    let value = currentVal
    value += 1
    if (isRange (value)) {
      setCurrentVal(value)
    }
  }

  function decrement () {
    let value = currentVal
    value -= 1
    if (isRange(value)) {
      setCurrentVal(value)
    }
  }

  function focusOutEventHandler () {
    let value = Number(inputRef.current.value)
    if (isRange(value)) {
      setCurrentVal(value)
    }
  }

  function focusInEventHandler () {
    inputRef.current.select()
  }

  function isRange (value) {
    return value >= min && value <= max
  }

  return (
    <div className="counter">
      <button onClick={decrement} className="counter__button-minus">
        <svg className="counter__svg">
          <use href="#minus"></use>
        </svg>
      </button>
      <input
        className="counter__value"
        type="text"
        ref={inputRef}
        value={currentVal}
        onChange={focusOutEventHandler}
        onFocus={focusInEventHandler}
      />
      <button onClick={increment} className="counter__button-plus">
        <svg className="counter__svg">
          <use href="#plus"></use>
        </svg>
      </button>
    </div>
  )
}

export default Counter
