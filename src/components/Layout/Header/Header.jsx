import React  from "react";
import styles from "./Header.module.scss";
import menuImg from "../../../logo/menu.png";
import EL_KUTBI from "../../../logo/EL-KUTBI.jpg";
import login from "../../../logo/user (2).png";
import basket from "../../../logo/basket.png";
import mappointer from "../../../logo/mappointer (1).png";
import { Link } from "react-router-dom";
import Menu from "../../Content/Menu/Menu";
import SearchValue from "../../Content/SearchValue/SearchValue";

const Header = () => {
  const menu = React.useRef();
  

  const menuUpdate = () => {
    document.body.style.overflow = "hidden"
    menu.current.classList.toggle(styles.menuActive);
    menu.current.classList.toggle(styles.modalOpen);
    return menu.current.classList.toggle(styles.menuNone);
  };

  const menuСlose = () => {
    document.body.style.overflow = "auto"
    menu.current.classList.add(styles.menuNone);
    return menu.current.classList.remove(styles.menuActive);
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
            <SearchValue/>
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
