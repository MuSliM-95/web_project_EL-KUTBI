import React from "react";
import styles from "./FavoritesButton.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../app/AsyncFetch/favoritesFetch";
import { useNavigate } from "react-router-dom";


const FavoritesButton = (props) => { 

  const productObj = props.el || props.product
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favoritesProduct = useSelector(
    (state) => state.favoritesReducer.productFavorites
  );
  const userId = useSelector((state) => state.usersReducer.userId);
  const token = useSelector((state) => state.usersReducer.token);
  const filter = favoritesProduct?.some((item) => item?._id === productObj?._id);

  const addProductFavorites = () => {
    if (!token) return navigate("signinUp");
    if (!filter) return dispatch(addItem({ userId, item: productObj }));
  };

  return (
    <div className="button_wrapper">
      <button
        type="button"
        onClick={addProductFavorites}
        disabled={filter}
        className={filter ? styles.favoritesActive : styles.favoritesNone}
      ></button>
    </div>
  );
};

FavoritesButton.propTypes = {
  props: PropTypes.object,
};

export default FavoritesButton;
