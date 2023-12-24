import React from "react";
import { Link, useMatch } from "react-router-dom";
import styles from "./UserIcons.module.scss";

export const UserIcons = () => {
  return (
    <Link
      to={"/userAccount"}
      className={
        useMatch("/userAccount")
          ? styles.FixedMenuLinkPersonalAccountActive
          : styles.FixedMenuLinkPersonalAccount
      }
    >
      <span
        className={
          useMatch("/userAccount") ? styles.userActive : styles.userNone
        }
      ></span>
    </Link>
  );
};

