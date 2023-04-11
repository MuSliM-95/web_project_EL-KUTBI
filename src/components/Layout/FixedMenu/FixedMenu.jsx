import React from "react";
import { Link, useMatch } from "react-router-dom";
import Menu from "../../Content/Menu/Menu";
import styles from "./FixedMenu.module.scss";

const FixedMenu = () => {
  const menu = React.createRef();

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
          useMatch("testPage")
            ? styles.FixedMenuLinkSelectedActive
            : styles.FixedMenuLinkSelected
        }
        to={"testPage"}
      ></Link>
      <Link
        onClick={menuСlose}
        className={styles.FixedMenuLinkPersonalAccount}
        to={"#"}
      ></Link>
    </div>
  );
};

export default FixedMenu;
