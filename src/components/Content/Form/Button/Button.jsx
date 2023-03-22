import React from "react";
import style from "./Button.module.scss"

const Button = () => {
    return(
        <div>
            <button className={style.button}>Отправить форму</button>
        </div>
    )
}

export default Button