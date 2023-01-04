import { useRef } from 'react';

import './Counter.css';

function Counter({count}) {

  const inputRef = useRef();

  function changeCountValue(operation) {
    if (operation === 'plus') count++;
    else count--;
    const inputElem = inputRef.current;
    inputElem.value = count;
  }

  return (
    <div className="counter">
      <button onClick={() => {
        changeCountValue('minus');
      }} className="counter__button-minus">
        <svg className="counter__svg">
          <use href="#minus"></use>
        </svg>
      </button>
      <input ref={inputRef} className="counter__value" type="text" value={count}/>
      <button onClick={() => {
        changeCountValue('plus');
      }} className="counter__button-plus">
        <svg className="counter__svg">
          <use href="#plus"></use>
        </svg>
      </button>
    </div>
  );
}

export default Counter;