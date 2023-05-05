import React, { useRef, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import Menu from "../../Content/Menu/Menu";
import styles from "./FixedMenu.module.scss";

const FixedMenu = () => {
  const menu = useRef(null);
  const [menuButton, setMenuButton] = useState(false);

  const menuUpdate = () => {
    setMenuButton(!menuButton);
    menu.current.classList.toggle(styles.menuActive);
    return menu.current.classList.toggle(styles.menuNone);
  };

  const menuСlose = () => {
    setMenuButton(false);
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
          useMatch("/") && !menuButton
            ? styles.FixedMenuLinkHomeActive
            : styles.FixedMenuLinkHome
        }
      ></Link>
      <button
        type="button"
        className={
          menuButton
            ? styles.FixedMenuButtonMenuActive
            : styles.FixedMenuButtonMenu
        }
        onClick={menuUpdate}
      ></button>
      <Link
        onClick={menuСlose}
        className={
          useMatch("/basket") && !menuButton
            ? styles.FixedMenuLinkBasketActive
            : styles.FixedMenuLinkBasket
        }
        to={"/basket"}
      ></Link>
      <Link
        onClick={menuСlose}
        className={
          useMatch("/favorites") && !menuButton
            ? styles.FixedMenuLinkSelectedActive
            : styles.FixedMenuLinkSelected
        }
        to={"/favorites"}
      ></Link>
      <Link
        onClick={menuСlose}
        to={"/usersAccount"}
        className={
          useMatch("/usersAccount") && !menuButton
            ? styles.FixedMenuLinkPersonalAccountActive
            : styles.FixedMenuLinkPersonalAccount
        }
      ></Link>
    </div>
  );
};

export default FixedMenu;
