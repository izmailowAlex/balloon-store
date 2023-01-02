import './Counter.css';

function Counter() {
  return (
    <div className="counter">
      <button className="counter__button-minus">
        <svg className="counter__svg">
          <use href="#minus"></use>
        </svg>
      </button>
      <input className="counter__value" type="text" value="20"/>
      <button className="counter__button-plus">
        <svg className="counter__svg">
          <use href="#plus"></use>
        </svg>
      </button>
    </div>
  );
}

export default Counter;