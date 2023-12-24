import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBlock}>
        <h3>Книжный интернет магазин</h3>
        <h2>‹‹EL-KUTBI››</h2>
      </div>
      <div className={styles.aboutus}>
        <div>
          <a href="#/">Доставка и оплата</a>
          <a href="#/">Обратная связь</a>
          <a href="#/">О нас</a>
        </div>
      </div>
      <hr />
      <div className={styles.date}>© 2023, EL-KUTBI </div>
    </footer>
  );
};

export default Footer;
