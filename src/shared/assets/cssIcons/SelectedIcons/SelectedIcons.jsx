import React from "react";
import styles from "./SelectedIcons.module.scss";
import { Link, useMatch } from "react-router-dom";

export const SelectedIcons = () => {
  return (
    <Link
      className={
        useMatch("/favorites")
          ? styles.FixedMenuLinkSelectedActive
          : styles.FixedMenuLinkSelected
      }
      to={"/favorites"}
    ></Link>
  );
};


