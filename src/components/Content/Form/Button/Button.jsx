import React from "react";
import style from "./Button.module.scss";

const Button = ({ addUserData }) => {
  return (
    <div>
      <button type="button" onClick={addUserData} className={style.button}>
        Отправить форму
      </button>
    </div>
  );
};

export default Button;
