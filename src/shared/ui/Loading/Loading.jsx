import React from "react";
import styles from "./Loading.module.scss";

export const Loading = () => {
  return (
    <div className={styles.loadingBlock}>
      <span className={styles.loader}></span>
    </div>
  );
};

