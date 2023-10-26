import React from "react";
import styles from "./Footer.module.scss";
import whatsapp from "../../../logo/whatsapp.png";
import telegram from "../../../logo/telegram.png";
import instagram from "../../../logo/instagram.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBlock}>
        <h3>Книжный интернет магазин</h3>
        <h2>‹‹EL-KUTBI››</h2>
        <div className={styles.messengers}>
          <a
            href="https://wa.me/79604416212"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img src={whatsapp} alt="whatsapp_logo" />
          </a>
          <a
            href="https://t.me/EL_KUTB_Bot"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img src={telegram} alt="telegram_logo" />
          </a>
          <a
            href="https://instagram.com/el_kutbi?igshid=YmMyMTA2M2Y="
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img src={instagram} alt="instagram_logo" />
          </a>
        </div>
      </div>
      <div className={styles.aboutus}>
        <div>
          <a href="#/">Доставка и оплата</a>
          <a href="#/">О нас</a>
        </div>
      </div>
      <hr />
      <div className={styles.date}>© 2023, EL-KUTBI </div>
    </footer>
  );
};

export default Footer;
