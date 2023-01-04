import './Input.css';

function Input({className, name, value, placeholder, message, maxlength}) {
  const classname = className ? 'input ' + className : 'input';

  return (
    <div className={classname}>
      <input className="input__textbox" type="text" name={name} value={value} placeholder={placeholder} autocomplete="off" maxlength={maxlength}/>
      {message
      ? <span className="input__message">{message}</span>
      : ""}
    </div>
  );
}

export default Input;