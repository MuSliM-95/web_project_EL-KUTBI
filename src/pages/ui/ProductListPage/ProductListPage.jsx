import React from "react";
import styles from "./ProductListPage.module.scss";
import ProductList from "../../../entities/ui/ProductList/ProductList";


const ProductListPage = () => {
  return (
    <div className={styles.productListPage}>
      <ProductList />
    </div>
  );
};

export default ProductListPage;
