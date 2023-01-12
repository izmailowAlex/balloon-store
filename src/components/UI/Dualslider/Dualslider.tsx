import React, { useState, useRef, useCallback, useEffect } from 'react'
import { IDualslider } from '../../../interfaces/interface'
import './Dualslider.css'
import Input from '../Input/Input'

function Dualslider ({ min, max }: IDualslider): JSX.Element {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const range = useRef<HTMLDivElement>(null)

  const getPercent = useCallback(
    (value: number) => {
      return Math.round(((value - min) / (max - min)) * 100)
    },
    [min, max]
  )

  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxVal)

    const currentElem = range.current

    if (currentElem !== null) {
        currentElem.style.left = `${minPercent}%`
        currentElem.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, maxVal, getPercent])

  const changeMinValHandler = (value: number) => {
    if (value < min || value > max) {
      value = minVal
    }
    if (value > maxVal) {
      setMaxVal(value)
    }
    setMinVal(value)
  }

  const changeMaxValHandler = (value: number) => {
    if (value < min || value > max) {
      value = maxVal
    }
    if (value < minVal) {
      setMinVal(value)
    }
    setMaxVal(value)
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
        value={String(minVal)}
        onChange={(event) => {
          const value = Math.min(+event.target.value, +maxVal)
          changeMinValHandler(value)
          event.target.value = value.toString()
        }}
      />
      <input
        className="dualslider__thumb dualslider__thumb_right"
        type="range"
        min={min}
        max={max}
        value={String(maxVal)}
        onChange={(event) => {
          const value = Math.max(+event.target.value, +minVal)
          changeMaxValHandler(value)
          event.target.value = value.toString()
        }}
      />
      <div className="dualslider__wrapper">
        <div className="dualslider__track"></div>
        <div className="dualslider__range" ref={range}></div>
        <Input
          className="dualslider__min-value"
          value={String(minVal)}
          label={'от'}
          maxlength={String(max).length}
          onFocus={(event) => event.target.select()}
          onChange={(event) => changeMinValHandler(Number(event.target.value))}
        />
        <Input
          className="dualslider__max-value"
          value={String(maxVal)}
          label={'до'}
          maxlength={String(max).length}
          onFocus={(event) => event.target.select()}
          onChange={(event) => changeMaxValHandler(Number(event.target.value))}
        />
      </div>
    </div>
  )
}

export default Dualslider
