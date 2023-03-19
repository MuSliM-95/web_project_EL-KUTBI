import React from "react";
import style from "./Header.module.scss"
import sign_in from "../../logo/sign-in.png"
import EL_KUTBI from "../../logo/EL-KUTBI.jpg"


const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerBloc1}>
                <img className={style.El_kutbiImg} src={EL_KUTBI} alt="menu" />
                <strong className={style.storeName}>EL-KUTBI</strong>
                <img className={style.sign_in} src={sign_in} alt="sign-in_logo" />
            </div>

            <div className={style.headerBloc2}>
                <div>
                    <input className={style.input} type="text" />
                    <a href="https://t.me/EL_KUTB_Bot">EL_KUTB</a>
                </div>

            </div>
  
            <div></div>
        </header>
    )
}

export default Header