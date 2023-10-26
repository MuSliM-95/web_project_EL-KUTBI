import React from "react";
import styles from "./Header.module.scss";
import EL_KUTBI from "../../../logo/EL-KUTBI.jpg";
import login from "../../../logo/user (2).png";
import basket from "../../../logo/basket.png";
import { Link } from "react-router-dom";
import SearchValue from "../../Content/SearchValue/SearchValue";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_store_logo_wrapper}>
        <img className={styles.store_logo} src={EL_KUTBI} alt="store_logo" />
      </div>
      <div className={styles.lower_header_block}>
        <div className={styles.header_functional_wrapper}>
          <div className={styles.header_functional_block}>
            <h1 className={styles.storeName}>
              <Link className={styles.name_link} to={"/"}>
                EL-KUTBI
              </Link>
            </h1>
            <SearchValue />
          </div>
          <div className={styles.login_basket_container}>
            <Link to={"/usersAccount"} className={styles.login_basket}>
              <img
                className={styles.login_basket_image}
                src={login}
                alt="login_logo"
              />
              <p className={styles.login_basket_text}>Войти</p>
            </Link>
            <Link to={"/basket"} className={styles.login_basket}>
              <img
                className={styles.login_basket_image}
                src={basket}
                alt="basket_logo"
              />
              <p className={styles.login_basket_text}>Корзина</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
