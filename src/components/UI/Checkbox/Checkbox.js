import { useSearchParams } from 'react-router-dom';
import './Checkbox.css';

function Checkbox({children, className, onChange}) {
  const classname = className ? "checkbox " + className : "checkbox"

  return (
    <label className={classname}>
      <input
        className="checkbox__input"
        type="checkbox"
        onChange={onChange}
      />
      <span className="checkbox__wrapper">
        <span className="checkbox__icon">
          <svg className="checkbox__svg"><use href="#check"></use></svg>
        </span>
        <span className="checkbox__label">{children}</span>
      </span>
    </label>
  );
}

export default Checkbox;