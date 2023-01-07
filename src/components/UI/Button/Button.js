import './Button.css';
import {Link} from "react-router-dom";

function Button({children, className, to, button, onClick}) {
  const classname = className ? 'button ' + className : 'button';

  return (
    <>
      {button
        ? <button className={classname} onClick={onClick}>{children}</button>
        : <Link className={classname} onClick={onClick} to={to}>{children}</Link>
      }
    </>
  );
}

export default Button;