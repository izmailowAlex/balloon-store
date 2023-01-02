import './Checkbox.css';

function Checkbox(props) {
  return (
    <label className="checkbox">
      <input className="checkbox__input" type="checkbox" />
      <span className="checkbox__wrapper">
        <span className="checkbox__icon">
          <svg className="checkbox__svg"><use href="#check"></use></svg>
        </span>
        <span className="checkbox__label">{props.children}</span>
      </span>
    </label>
  );
}

export default Checkbox;