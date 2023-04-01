import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../../Content/Menu/Menu";
import styles from "./FixedMenu.module.scss";

const FixedMenu = () => {
  const menu = React.createRef();

  const menuUpdate = () => {
    menu.current.classList.toggle(styles.menuActive);
    menu.current.classList.toggle(styles.menuNone);
  };

  const menuСlose = () => {
    menu.current.classList.add(styles.menuNone);
    menu.current.classList.remove(styles.menuActive);
  };

  return (
    <div className={styles.FixedMenuContainer}>
      <div ref={menu} className={styles.menuNone}>
        <Menu />
      </div>
      <Link onClick={menuСlose} className={styles.FixedMenuLinkHome} to={"/"}></Link>
      <button
        className={styles.FixedMenuButtonMenu}
        onClick={menuUpdate}
      ></button>
      <Link onClick={menuСlose} className={styles.FixedMenuLinkBasket} to={"#"}></Link>
      <Link onClick={menuСlose}className={styles.FixedMenuLinkSelected} to={"#"}></Link>
      <Link onClick={menuСlose}className={styles.FixedMenuLinkPersonalAccount} to={"#"}></Link>
    </div>
  );
};

export default FixedMenu;
