import React from "react";
import styles from "./ProductButton.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../app/Reducers/basketReducer";

const ProductButton = ({ el }) => {
  const dispatch = useDispatch();

  const basketProducts = useSelector((state) => state.basketReducer.basket);
  const filter = basketProducts?.some((item) => item._id === el._id);

  const addProductBasket = () => {
    if (!filter) {
      return dispatch(addItem({...el, quantity: 1}));
    }
    dispatch(removeItem(el._id));
  };

  return (
    <button
      type="button"
      onClick={addProductBasket}
      className={styles.productButton}
    >
      {filter ? "Удалить из корзины" :"В корзину"}
    </button>
  );
};

ProductButton.propTypes = {
  el: PropTypes.object.isRequired,
};

export default ProductButton;
