import React from "react";
import styles from "./BasketPage.module.scss";
import Basket from "../../components/Content/Basket/Basket";

const BasketPage = () => {
  return (
    <div className={styles.basketPage}>
      <Basket />
    </div>
  );
};

export default BasketPage;
