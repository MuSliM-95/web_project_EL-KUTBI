import React from "react";
import Registration from "../../components/Content/Registration/Registration";
import styles from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
  return (
    <div className={styles.signinUp}>
      <Registration />
    </div>
  );
};

export default RegistrationPage;
