import React, { useRef } from "react";
import styles from "./FavoritesButton.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../app/Reducers/favoritesReducer";


const FavoritesButton = ({ el }) => {
  const favoritesProduct = useSelector(
    (state) => state.favoritesReducer.productFavorites
  );
  const token = useSelector((state) => state.usersReducer.token);
  const dispatch = useDispatch();
  const favorites = useRef();
  const filter = favoritesProduct?.some((item) => item._id === el._id);

  const addProductFavorites = () => {
    if (!filter) {
      return dispatch(addItem(el));
    }
    return dispatch(removeItem(el._id));
  };
  return (
    <button
    type="button"
      ref={favorites}
      onClick={addProductFavorites}
      className={filter ? styles.favoritesActive : styles.favoritesNone}
    ></button>
  );
};

FavoritesButton.propTypes = {
  el: PropTypes.object.isRequired,
};

export default FavoritesButton;
