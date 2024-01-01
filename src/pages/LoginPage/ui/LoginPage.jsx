import React from "react";
import Login from "../../../shared/components/Login/Login";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <Login />
    </div>
  );
};

export default LoginPage;
