import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";
import PropTypes from "prop-types";

const Menu = ({ menuСlose }) => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.sectionContainer}>
        <div className={styles.buttonContainer}>
          <button onClick={menuСlose} className={styles.button_menuNone}>
            X
          </button>
        </div>
        <section>
          <Link
            onClick={menuСlose}
            className={styles.categoriesLinkHome}
            to={"/"}
          >
            Главная страница
          </Link>
        </section>
        <section>
          <Link
            onClick={menuСlose}
            className={styles.categoriesLinkBooks}
            to={"books"}
          >
            Книги
          </Link>
        </section>
        <section>
          <Link
            onClick={menuСlose}
            className={styles.categoriesLinkCosmetics}
            to={"cosmetics"}
          >
            Красота
          </Link>
        </section>
        <section>
          <Link
            onClick={menuСlose}
            className={styles.categoriesLinkHygiene}
            to={"hygiene"}
          >
            Гигиена
          </Link>
        </section>
        <section>
          <Link
            onClick={menuСlose}
            className={styles.categoriesLinkHealth}
            to={"health"}
          >
            Здоровье
          </Link>
        </section>
        <section>
          <Link
            onClick={menuСlose}
            className={styles.categoriesLinkСhosen}
            to={"favorites"}
          >
            Избранное
          </Link>
        </section>
      </div>
      <div onClick={menuСlose} className={styles.menuOpacityBlock}></div>
    </div>
  );
};

Menu.propTypes = {
  menuСlose: PropTypes.func.isRequired,
};

export default Menu;
