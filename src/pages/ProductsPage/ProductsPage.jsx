import React from "react";
import styles from "./ProductsPage.module.scss";
import Products from "../../components/Content/Products/ProductsList";

const ProductsPage = () => {
  return (
    <div className={styles.productsPage}>
      <Products />
    </div>
  );
};

export default ProductsPage;
