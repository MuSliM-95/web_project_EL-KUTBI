import React from "react";
import styles from "./FavoritesButton.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../app/AsyncFetch/favoritesFetch";

const FavoritesButton = ({ el }) => {
  const dispatch = useDispatch();
  const favoritesProduct = useSelector(
    (state) => state.favoritesReducer.productFavorites
  );
  const userId = useSelector((state) => state.usersReducer.userId);
  const filter = favoritesProduct?.some((item) => item._id === el._id);

  const addProductFavorites = () => {
    if (!filter) {
      return dispatch(addItem({ userId, item: el }));
    }
  };

  return (
    <button
      type="button"
      onClick={addProductFavorites}
      disabled={filter}
      className={filter ? styles.favoritesActive : styles.favoritesNone}
    ></button>
  );
};

FavoritesButton.propTypes = {
  el: PropTypes.object.isRequired,
};

export default FavoritesButton;
