import { useState, useRef, useCallback, useEffect } from 'react'
import './Dualslider.css'
import Input from '../Input/Input'

function Dualslider ({ min, max }) {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const minValRef = useRef(null)
  const maxValRef = useRef(null)
  const minInputRef = useRef(null)
  const maxInputRef = useRef(null)
  const range = useRef(null)

  const getPercent = useCallback (
    (value) => {
      return Math.round(((value - min) / (max - min)) * 100)
    },
    [min, max]
  )

  useEffect (() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal)
      const maxPercent = getPercent(+maxValRef.current.value)

      if (range.current) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent])

  useEffect (() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(maxVal)

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent])

  useEffect (() => {
    minInputRef.current.value = minVal
    maxInputRef.current.value = maxVal
  }, [])

  function minInputOnBlurHandler() {
    const value = minInputRef.current.value
    if (
      !isEmpty(value) &&
      isNumber(value) &&
      isRange(value) &&
      value < maxVal
    ) {
      setMinVal(value)
    } else {
      minInputRef.current.value = minVal
    }
  }

  function maxInputOnBlurHandler () {
    const value = maxInputRef.current.value
    if (
      !isEmpty(value) &&
      isNumber(value) &&
      isRange(value) &&
      value > minVal
    ) {
      setMaxVal(value)
    } else {
      maxInputRef.current.value = maxVal
    }
  }

  function isNumber (value) {
    return !Number.isNaN(Number(value))
  }

  function isEmpty (value) {
    value = String(value)
    return value.trim() === ''
  }

  function isRange (value) {
    return value >= min && value <= max
  }

  return (
    <div className="dualslider">
      <input
        className={
          minVal > max - 100
            ? 'dualslider__thumb dualslider__thumb_upper'
            : 'dualslider__thumb dualslider__thumb_left'
        }
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1)
          setMinVal(value)
          event.target.value = value.toString()
          minInputRef.current.value = value.toString()
        }}
      />
      <input
        className="dualslider__thumb dualslider__thumb_right"
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1)
          setMaxVal(value)
          event.target.value = value.toString()
          maxInputRef.current.value = value.toString()
        }}
      />
      <div className="dualslider__wrapper">
        <div className="dualslider__track"></div>
        <div className="dualslider__range" ref={range}></div>
        <Input
          className="dualslider__min-value"
          ref={minInputRef}
          label={'от'}
          maxlength={String(max).length}
          onFocus={(event) => event.target.select()}
          onBlur={minInputOnBlurHandler}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.target.blur()
              maxInputRef.current.select()
            }
          }}
        />
        <Input
          className="dualslider__max-value"
          ref={maxInputRef}
          label={'до'}
          maxlength={String(max).length}
          onFocus={(event) => event.target.select()}
          onBlur={maxInputOnBlurHandler}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.target.blur()
            }
          }}
        />
      </div>
    </div>
  )
}

export default Dualslider
