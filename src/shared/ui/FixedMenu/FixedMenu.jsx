import React from "react";
import styles from "./FixedMenu.module.scss";
import { HomeIcons } from "../../assets/cssIcons/HomeIcons/HomeIcons";
import { BasketIcons } from "../../assets/cssIcons/BasketIcons/BasketIcons";
import { SelectedIcons } from "../../assets/cssIcons/SelectedIcons/SelectedIcons";
import { UserIcons } from "../../assets/cssIcons/UserIcons/UserIcons";



export const FixedMenu = () => {
  return (
    <div className={styles.FixedMenuContainer}>
      <HomeIcons />
      <BasketIcons />
      <SelectedIcons />
      <UserIcons />
    </div>
  );
};
