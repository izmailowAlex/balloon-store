import './Button.css';

function Button({children, className, href, button}) {
  const classname = className ? 'button ' + className : 'button';

  return (
    <>
      {button
        ? <button className={classname}>{children}</button>
        : <a className={classname} href={href}>{children}</a>
      }
    </>
  );
}

export default Button;