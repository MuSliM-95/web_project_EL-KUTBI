import React from "react";
import styles from "./FixedMenu.module.scss";
import HomeIcons from "../MenuIcons/HomeIcons/HomeIcons";
import BasketIcons from "../MenuIcons/BasketIcons/BasketIcons";
import SelectedIcons from "../MenuIcons/SelectedIcons/SelectedIcons";
import UserIcons from "../MenuIcons/UserIcons/UserIcons";
import ContactsIcons from "../MenuIcons/ContactsIcons/ContactsIcons";

const FixedMenu = () => {
  return (
    <div className={styles.FixedMenuContainer}>
      <HomeIcons/>
      <BasketIcons/>
      <ContactsIcons/>
      <SelectedIcons/>
      <UserIcons/>
    </div>
  );
};

export default FixedMenu;
