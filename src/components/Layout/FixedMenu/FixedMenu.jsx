import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Menu from "../../Content/Menu/Menu";
import styles from "./FixedMenu.module.scss";

const FixedMenu = () => {
  const menu = useRef();

  const menuUpdate = () => {
    menu.current.classList.toggle(styles.menuActive);
    return menu.current.classList.toggle(styles.menuNone);
  };

  const menuСlose = (e) => {
    console.log(e.target.classList.toggle("active"));
    menu.current.classList.add(styles.menuNone);
    return menu.current.classList.remove(styles.menuActive);
  };

  return (
    <div className={styles.FixedMenuContainer}>
      <div ref={menu} className={styles.menuNone}>
        <Menu menuСlose={menuСlose} />
      </div>
      <Link
        onClick={menuСlose}
        to={"/"}
        className={styles.FixedMenuLinkHome}
      ></Link>
      <button
        type="button"
        className={styles.FixedMenuButtonMenu}
        onClick={menuUpdate}
      ></button>
      <Link
        onClick={menuСlose}
        className={styles.FixedMenuLinkBasket}
        to={"/basket"}
      ></Link>
      <Link
        onClick={menuСlose}
        className={styles.FixedMenuLinkSelected}
        to={"/favorites"}
      ></Link>
      <Link
        onClick={menuСlose}
        to={"/usersAccount"}
        className={styles.FixedMenuLinkPersonalAccount}
      ></Link>
    </div>
  );
};

export default FixedMenu;
