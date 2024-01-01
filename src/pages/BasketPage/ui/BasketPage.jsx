import React from "react";
import styles from "./BasketPage.module.scss";
import Basket from "../../../entities/ui/Basket/Basket";


const BasketPage = () => {
  return (
    <div className={styles.basketPage}>
      <Basket />
    </div>
  );
};

export default BasketPage;
