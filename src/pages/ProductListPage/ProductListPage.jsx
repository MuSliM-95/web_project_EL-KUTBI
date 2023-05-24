import React from "react";
import styles from "./ProductListPage.module.scss";
import ProductsList from "../../components/Content/ProductsList/ProductsList";

const ProductListPage = () => {
  return (
    <div className={styles.productListPage}>
      <ProductsList />
    </div>
  );
};

export default ProductListPage;
