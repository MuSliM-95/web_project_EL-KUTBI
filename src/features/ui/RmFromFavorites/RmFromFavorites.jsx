import React from "react";
import styles from "./RmFromFavorites.module.scss";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { removeItem } from "../../../entities/api/async/favoritesFetch";

const RmFromFavorites = (props) => {

  const productObj = props.el || props.product
  
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.usersReducer.userId);

  const handleItemRemove = () => {
    return dispatch(removeItem({ userId, item: productObj }));
  };
  return (
    <button type="button" onClick={handleItemRemove}>
      ❌
    </button>
  );
};

RmFromFavorites.propTypes = {
  props: PropTypes.object,
};
export default RmFromFavorites;
