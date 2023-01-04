import './Button.css';
import {Link} from "react-router-dom";

function Button({children, className, to, button}) {
  const classname = className ? 'button ' + className : 'button';

  return (
    <>
      {button
        ? <button className={classname}>{children}</button>
        : <Link className={classname} to={to}>{children}</Link>
      }
    </>
  );
}

export default Button;