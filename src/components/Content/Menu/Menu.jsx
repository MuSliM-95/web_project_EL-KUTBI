import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu = ({ menuUpdate, menuСlose }) => {





  return (
    <div className={styles.menuContainer}>
      <div className={styles.sectionContainer}>
        <section>
          <Link onClick={menuСlose}  className={styles.categoriesLinkHome} to={"/"}>Главная страница</Link>
        </section>
        <section>
          <Link onClick={menuСlose}  className={styles.categoriesLinkBooks} to={"books"}>Книги</Link>
        </section>
        <section>
          <Link onClick={menuСlose}  className={styles.categoriesLinkCosmetics}  to={"cosmetics"}>Красота</Link>
        </section>
        <section>
          <Link onClick={menuСlose}  className={styles.categoriesLinkHygiene} to={"hygiene"}>Гигиена</Link>
        </section>
        <section>
          <Link onClick={menuСlose}  className={styles.categoriesLinkHealth} to={"health"}>Здоровье</Link>
        </section>
        <section>
          <Link onClick={menuСlose}  className={styles.categoriesLinkСhosen} to={"chosen"}>Избранное</Link>
        </section>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={menuUpdate} className={styles.button_menuNone}>X</button>
      </div>
    </div>
  );
};

export default Menu;
