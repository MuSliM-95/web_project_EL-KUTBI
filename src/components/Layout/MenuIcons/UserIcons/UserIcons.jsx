import React from "react";
import { Link, useMatch } from "react-router-dom";
import styles from "./UserIcons.module.scss";

const UserIcons = () => {
  return (
    <Link
      to={"/usersAccount"}
      className={
        useMatch("/usersAccount")
          ? styles.FixedMenuLinkPersonalAccountActive
          : styles.FixedMenuLinkPersonalAccount
      }
    >
      <span
        className={
          useMatch("/usersAccount") ? styles.userActive : styles.userNone
        }
      ></span>
    </Link>
  );
};

export default UserIcons;
