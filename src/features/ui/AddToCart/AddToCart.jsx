import React, { useEffect } from "react";
import styles from "./AddToCart.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../entities/api/slice/basketReducer";
import { addProductsBasket } from "../../../entities/api/async/basketFetch";

const AddToCart = (props) => {
  
  const productObj = props.productObj || props.el
  
  console.log(productObj);
 
  const dispatch = useDispatch();

  const basketProducts = useSelector((state) => state.basketReducer.basket);
  const userId = useSelector((state) => state.usersReducer.userId);
  const token = useSelector((state) => state.usersReducer.token);

  const filter = basketProducts?.some((item) => item?._id === productObj?._id);

  useEffect(() => {
    if (token) {
      dispatch(addProductsBasket({ userId, basketArray: basketProducts }));
    }
  }, []);

  const addProductBasket = () => {
    if (!filter) {
      return dispatch(addItem({ ...productObj, quantity: 1 }));
    }
    dispatch(removeItem(productObj?._id));
  };

  return (
    <button
      type="button"
      onClick={addProductBasket}
      className={styles.productButton}
    >
      {filter ? "Удалить из корзины" : "В корзину"}
    </button>
  );
};

AddToCart.propTypes = {
  props: PropTypes.object,
};

export default AddToCart;
