import React from "react";
import styles from "./BasketIcons.module.scss";
import { Link, useMatch } from "react-router-dom";

export const BasketIcons = () => {
  return (
    <Link
      className={
        useMatch("/basket")
          ? styles.FixedMenuLinkBasketActive
          : styles.FixedMenuLinkBasket
      }
      to={"/basket"}
    >
      <span className={styles.cart_line_1}></span>
      <span className={styles.cart_line_2}></span>
      <span className={styles.cart_line_3}></span>
      <span className={styles.cart_wheel}></span>
    </Link>
  );
};


