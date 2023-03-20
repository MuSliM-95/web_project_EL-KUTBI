import React from "react";
import styles from "./Contacts.module.scss"
import Whatsapp from "../../logo/whatsapp_108042.png"
import telegram from "../../logo/telegram.png"

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <a href="https://t.me/EL_KUTB_Bot"><img className={styles.contactsImg} src={Whatsapp} alt="Whatsapp_logo" /></a>
            <a href="https://t.me/EL_KUTB_Bot"><img className={styles.contactsImg} src={telegram} alt="telegram_logo" /></a>
        </div>
    )
}

export default Contacts