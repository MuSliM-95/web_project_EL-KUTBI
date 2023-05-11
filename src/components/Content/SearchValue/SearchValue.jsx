import React, { useEffect, useState } from "react";
import styles from "./SearchValue.module.scss";
import search from "../../../logo/search.png";
import { useDispatch } from "react-redux";
import { inputValue } from "../../../app/Reducers/productsReducer";

const SearchValue = () => {
  const dispatch = useDispatch("");
  const [searchValue, setSearchValue] = useState("");

  const stopForm = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(inputValue(searchValue));
  });

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form onClick={stopForm}>
      <button className={styles.search_button}>
        <img className={styles.search} src={search} alt="search" />
      </button>
      <input
        onChange={handleSearchValue}
        value={searchValue}
        className={styles.input}
        placeholder="Найти книгу или товар"
        type="text"
      />
    </form>
  );
};

export default SearchValue;
