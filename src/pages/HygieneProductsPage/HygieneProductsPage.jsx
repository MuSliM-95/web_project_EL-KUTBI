import React from "react";
import HygieneProductsList from "../../components/Content/HygieneProducts/HygieneProductsList";
import styles from "./HygieneProductsPage.module.scss";

const HygieneProductsPage = () => {
  return (
    <div className={styles.hygieneProductsPage}>
      <HygieneProductsList />
    </div>
  );
};

export default HygieneProductsPage;
