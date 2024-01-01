import React from "react";
import styles from "./SelectedProductsPage.module.scss";
import { SelectedProducts } from "../../../entities";


const SelectedProductsPage = () => {
  return (
    <div className={styles.selectedProductsPage}>
      <SelectedProducts />
    </div>
  );
};

export default SelectedProductsPage;
