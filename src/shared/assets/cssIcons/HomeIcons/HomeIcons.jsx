import React from "react";
import { Link, useMatch } from "react-router-dom";
import styles from "./HomeIcons.module.scss";

export const HomeIcons = () => {
  return (
    <Link
      to={"/"}
      className={
        useMatch("/")
          ? styles.FixedMenuLinkHomeActive
          : styles.FixedMenuLinkHome
      }
    >
      <span className={styles.home_body}></span>
      <span className={styles.home_roof_cut_left}></span>
      <span className={styles.home_roof_cut_right}></span>
      <span className={styles.home_door}></span>
      <span className={styles.home_chimney}></span>
      <span className={styles.home_roof_container}>
        <span className={styles.home_roof_left}></span>
        <span className={styles.home_roof_right}></span>
      </span>
    </Link>
  );
};

