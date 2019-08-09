import React, { useState } from "react";

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

    Email инпут должен иметь поле data-testid='input-email'
    Password инпут должен иметь поле data-testid='input-password'
    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://reactjs.org/docs/hooks-reference.html#usereducer
*/

export const Form = () => {
  let [email, changeEmail] = useState("");
  let [password, changePassword] = useState("");
  let [success, makeSuccess] = useState(false);

  function onChangeEmail(e) {
    changeEmail(e.target.value);
  }
  function onChangePassword(e) {
    changePassword(e.target.value);
  }

  function onClick() {
    if (email !== "" && password !== "") {
      makeSuccess(true);
    }
  }

  return (
    <React.Fragment>
      <input
        className="email"
        name="email"
        data-testid="email-input"
        onChange={onChangeEmail}
        value={email}
      />
      <input
        className="password"
        name="password"
        data-testid="password-input"
        onChange={onChangePassword}
        value={password}
      />
      <button data-testid="submit" onClick={onClick} />
      {success && <div data-testid="success-message">Вы вошли</div>}
    </React.Fragment>
  );
};
