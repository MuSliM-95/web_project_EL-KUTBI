import React from "react";
import styles from "./ProductsPage.module.scss";
import Products from "../../components/Content/Products/ProductsList";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Products />
    </div>
  );
};

export default MainPage;
