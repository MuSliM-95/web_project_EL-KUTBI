import React from "react";
import styles from "./MainPage.module.scss";
import { AllProducts } from "../../../widgets/ui";


export const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      <AllProducts />
    </div>
  );
};


