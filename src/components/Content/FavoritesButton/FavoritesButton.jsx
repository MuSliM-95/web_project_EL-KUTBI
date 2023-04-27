import React, { useRef } from "react";
import styles from "./FavoritesButton.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../app/Reducers/favoritesReducer";

const FavoritesButton = ({ el }) => {
  const favoritesProduct = useSelector(
    (state) => state.favoritesReducer.productFavorites
  );
  const favorites = useRef();
  const dispatch = useDispatch();
  const filter = favoritesProduct?.some((item) => item._id === el._id);
  const addProductFavorites = () => {
    console.log(filter);
    if (!filter) {
      return dispatch(addItem(el));
    }
      return dispatch(removeItem(el._id));
  };
  return (
    <button
      ref={favorites}
      onClick={addProductFavorites}
      className={ filter ? styles.favoritesActive : styles.favoritesNone}
    ></button>
  );
};

FavoritesButton.propTypes = {
  el: PropTypes.object.isRequired,
};

export default FavoritesButton;
