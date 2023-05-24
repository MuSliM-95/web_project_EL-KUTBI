import React from "react";
import styles from "./HealthProductsPage.module.scss";
import HealthProductsList from "../../components/Content/HealthProductsList/HealthProductsList";

const HealthProductsPage = () => {
  return (
    <div className={styles.healthProductsPage}>
      <HealthProductsList />
    </div>
  );
};

export default HealthProductsPage;
