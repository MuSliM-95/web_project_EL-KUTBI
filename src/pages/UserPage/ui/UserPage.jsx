import React from "react";
import styles from "./UserPage.module.scss";
import User from "../../../entities/ui/User/User";


const UserPage = () => {
  

  return (
    <div className={styles.personalAccount}>
      <User />
    </div>
  );
};

export default UserPage;
