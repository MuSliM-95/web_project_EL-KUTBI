import React from "react";
import styles from "./Header.module.scss"
import sign_in from "../../logo/sign-in.png"
import EL_KUTBI from "../../logo/EL-KUTBI.jpg"
import contacts from "../../logo/contacts.png";



const Header = () => {

    const stopForm = (e) => {
        e.preventDefault()
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerBloc1}>
                <img className={styles.El_kutbiImg} src={EL_KUTBI} alt="menu" />
                <strong className={styles.storeName}>EL-KUTBI</strong>
                <img className={styles.sign_in} src={sign_in} alt="sign-in_logo" />
            </div>

            <div className={styles.headerBloc2}>
                <form onClick={stopForm}>
                    <input className={styles.input} type="text" />
                    <div>
                    <img className={styles.contacts} src={contacts} alt="contacts_logo" />
                        <b>Обратная связь</b>
                    </div>
                </form>

            </div>
        </header>
    )
}

export default Header