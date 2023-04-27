import React, { useRef } from "react";
import { Link, useMatch } from "react-router-dom";
import Menu from "../../Content/Menu/Menu";
import styles from "./FixedMenu.module.scss";

const FixedMenu = () => {
  const menu = useRef();

  // const match = useMatch()

  const menuUpdate = () => {
    menu.current.classList.toggle(styles.menuActive);
    return menu.current.classList.toggle(styles.menuNone);
  };

  const menuСlose = () => {
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
        className={
          useMatch("/")
            ? styles.FixedMenuLinkHomeActive
            : styles.FixedMenuLinkHome
        }
      ></Link>
      <button
        className={styles.FixedMenuButtonMenu}
        onClick={menuUpdate}
      ></button>
      <Link
        onClick={menuСlose}
        className={
          useMatch("/")
            ? styles.FixedMenuLinkBasketActive
            : styles.FixedMenuLinkBasket
        }
        to={"#"}
      ></Link>
      <Link
        onClick={menuСlose}
        className={
          useMatch("favorites")
            ? styles.FixedMenuLinkSelectedActive
            : styles.FixedMenuLinkSelected
        }
        to={"favorites"}
      ></Link>
      <Link
        onClick={menuСlose}
        to={"signinUp"}
        className={
          useMatch("signinUp")
            ? styles.FixedMenuLinkPersonalAccount
            : styles.FixedMenuLinkPersonalAccountActive
        }
      ></Link>
    </div>
  );
};

export default FixedMenu;
