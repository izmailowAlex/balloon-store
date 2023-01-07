import { useContext } from 'react';
import { CatalogContext } from '../../Main/Catalog/Catalog';
import { useSearchParams } from 'react-router-dom';
import './Checkbox.css';

function Checkbox({children, className}) {

  const { onChangeHandler } = useContext(CatalogContext);

  const classname = className ? "checkbox " + className : "checkbox";
  const [searchParams, setSearchParams] = useSearchParams()

  function clickCheckbox(children) {
    setSearchParams({category: children})
  }

  return (
    <label className={classname}>
      <input
        className="checkbox__input"
        type="checkbox"
        onChange={() => onChangeHandler()}
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