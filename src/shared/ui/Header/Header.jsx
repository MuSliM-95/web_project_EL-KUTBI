import React from "react";
import styles from "./Header.module.scss";
import EL_KUTBI from "../../../shared/assets/icons/EL-KUTBI.jpg";
import { Link } from "react-router-dom";
import SearchValue from "../../../shared/components/SearchValue/SearchValue";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";

const Header = () => {
  const token = useSelector((state) => state.usersReducer.token);

  return (
    <header className={styles.header}>
      <div className={styles.lower_header_block}>
        <div className={styles.header_functional_wrapper}>
          <div className={styles.header_functional_block}>
            <Link className={styles.name_link} to={"/"}>
              <img
                className={styles.store_logo}
                src={EL_KUTBI}
                alt="store_logo"
              />
              <h1 className={styles.storeName}>EL-KUTBI</h1>
            </Link>
            <SearchValue />
          </div>
          <div className={styles.login_basket_container}>
            <Link to={"/userAccount"} className={styles.login_basket}>
              <i className="bi bi-person-fill-check"></i>
              <p className={styles.login_basket_text}>
                {token ? "Профиль" : "Войти"}
              </p>
            </Link>
            <Link to={"/favorites"} className={styles.login_basket}>
              <i className="bi bi-heartbreak-fill"></i>
              <p className={styles.login_basket_text}>Мои</p>
            </Link>
            <Link to={"/basket"} className={styles.login_basket}>
              <i className="bi bi-cart-check-fill"></i>
              <p className={styles.login_basket_text}>Корзина</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
