import React from "react";
import styles from "./FavoritesRemoveButton.module.scss";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { removeItem } from "../../../app/AsyncFetch/favoritesFetch";

const FavoritesRemoveButton = ({ el }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.usersReducer.userId);

  const handleItemRemove = () => {
    return dispatch(removeItem({ userId, item: el }));
  };
  return (
    <button type="button" onClick={handleItemRemove}>
      ❌
    </button>
  );
};

FavoritesRemoveButton.propTypes = {
  el: PropTypes.object.isRequired,
};
export default FavoritesRemoveButton;
