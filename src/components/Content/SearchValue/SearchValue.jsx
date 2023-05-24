import React, { useEffect, useState } from "react";
import styles from "./SearchValue.module.scss";
import search from "../../../logo/search.png";
import { useDispatch } from "react-redux";
import { inputValue } from "../../../app/Reducers/productsReducer";

const SearchValue = () => {
  const dispatch = useDispatch("");
  const [searchValue, setSearchValue] = useState("");
  const [render, setRender] = useState(false)

  const stopForm = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(inputValue(searchValue));
  },[render]);

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
    setRender(!render)
  };

  const handleClearInput = () => {
    return setSearchValue("")
  }
  return (
    <form onClick={stopForm}>
      <button type="button" className={styles.search_button}>
        <img className={styles.search} src={search} alt="search" />
      </button>
      <input
        onChange={handleSearchValue}
        value={searchValue}
        className={styles.input}
        placeholder="Найти книгу или товар"
        type="text"
      />
      <button onClick={handleClearInput} className={styles.clearInput} type="button"></button>
    </form>
  );
};

export default SearchValue;
