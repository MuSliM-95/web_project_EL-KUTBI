import React from "react";
import Login from "../../components/Content/Login/Login";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <Login />
    </div>
  );
};

export default LoginPage;
