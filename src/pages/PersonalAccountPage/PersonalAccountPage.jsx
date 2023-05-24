import React from "react";
import styles from "./PersonalAccountPage.module.scss";
import PersonalAccount from "../../components/Content/PersonalAccount/PersonalAccount";

const PersonalAccountPage = () => {
  

  return (
    <div className={styles.personalAccount}>
      <PersonalAccount />
    </div>
  );
};

export default PersonalAccountPage;
