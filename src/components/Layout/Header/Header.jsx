import React, { useEffect } from "react";
import styles from "./Header.module.scss";
import menuImg from "../../../logo/menu.png";
import EL_KUTBI from "../../../logo/EL-KUTBI.jpg";
import search from "../../../logo/search.png";
import login from "../../../logo/user (2).png";
import basket from "../../../logo/basket.png";
import mappointer from "../../../logo/mappointer (1).png";
import { Link } from "react-router-dom";
import Menu from "../../Content/Menu/Menu";

const Header = () => {
  const menu = React.useRef();
  useEffect(() => {
    document.addEventListener("click", console.log(menu));
  });

  const menuUpdate = () => {
    menu.current.classList.toggle(styles.menuActive);
    return menu.current.classList.toggle(styles.menuNone);
  };

  const menuСlose = () => {
    menu.current.classList.add(styles.menuNone);
    return menu.current.classList.remove(styles.menuActive);
  };

  const stopForm = (e) => {
    e.preventDefault();
  };
  return (
    <header className={styles.header}>
      <div className={styles.upper_header_block}>
        <div className={styles.header_store_logo}>
          <img className={styles.store_logo} src={EL_KUTBI} alt="store_logo" />
        </div>
      </div>

      <div className={styles.lower_header_block}>
        <div className={styles.header_functional_elements}>
          <img
            onClick={menuUpdate}
            className={styles.menuImg}
            src={menuImg}
            alt="menu"
          />
          <div ref={menu} className={styles.menuNone}>
            <Menu menuСlose={menuСlose} />
          </div>
          <h1 className={styles.storeName}>
            <Link className={styles.name_link} to={"/"}>
              EL-KUTBI
            </Link>
          </h1>

          <form onClick={stopForm}>
            <input
              className={styles.input}
              placeholder="Найти книгу или товар"
              type="text"
            />
            <button className={styles.search_button}>
              <img className={styles.search} src={search} alt="search" />
            </button>
          </form>
          <div className={styles.login_basket_container}>
            <div className={styles.address_block}>
              <img
                className={styles.address_image}
                src={mappointer}
                alt="cursor_map_logo"
              />
              <p>Адрес</p>
            </div>
            <Link to={"signinUp"} className={styles.login_basket}>
              <img
                className={styles.login_basket_image}
                src={login}
                alt="login_logo"
              />
              <p className={styles.login_basket_text}>Войти</p>
            </Link>
            <div className={styles.login_basket}>
              <img
                className={styles.login_basket_image}
                src={basket}
                alt="basket_logo"
              />
              <p className={styles.login_basket_text}>Корзина</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
