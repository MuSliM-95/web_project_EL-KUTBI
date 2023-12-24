import React from "react";
import styles from "./GetMoreProducts.module.scss";
import PropTypes from "prop-types";

const GetMoreProducts = ({ getMoreProducts }) => {
  return (
    <button onClick={getMoreProducts} className={styles.moreItemsButton}>
      Показать еще ↆ
    </button>
  );
};

GetMoreProducts.propTypes = {
  getMoreProducts: PropTypes.func.isRequired,
};
export default GetMoreProducts;
