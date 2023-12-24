import React from "react";
import Registration from "../../../shared/components/Registration/Registration";
import styles from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
  return (
    <div className={styles.signinUp}>
      <Registration />
    </div>
  );
};

export default RegistrationPage;
