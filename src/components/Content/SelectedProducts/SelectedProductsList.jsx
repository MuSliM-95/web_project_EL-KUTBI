import React, { useEffect } from "react";
import styles from "./SelectedProductsList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../app/AsyncFetch/productsFetch";
import ProductButton from "../ProductButton/ProductButton";
import FavoritesButton from "../FavoritesButton/FavoritesButton";
import { serverUrl } from "../../../serverUrl/serverUrl";
import { Link } from "react-router-dom";

const SelectedProductsList = () => {
  const dispatch = useDispatch();
  const favoritesProduct = useSelector(
    (state) => state.favoritesReducer.productFavorites
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={styles.productListСontainer}>
      <div
        className={
          favoritesProduct?.length > 0
            ? styles.favoritesProductNone
            : styles.favoritesProductZero
        }
      >
        <h3>В избранном пока пусто</h3>
        <p>Сохраняйте товары, которые понравились, чтобы долго не искать</p>
        <Link className={styles.linkButton} to={"/"}>
          Выбрать любимый товар❤️
        </Link>
      </div>
      {favoritesProduct?.map((el, index) => {
        return (
          <div key={index} className={styles.productList}>
            <div className={styles.productImageContainer}>
              <img
                className={styles.productImage}
                src={`${serverUrl}/${el.imageSrc}`}
                alt="books"
              />
              <div className={styles.favorites_button_container}>
                <FavoritesButton el={el} />
              </div>
            </div>
            <div className={styles.productInfo}>
              <strong>{el.price} р</strong>
              <p>{el.name}</p>
              <p className={styles.booksAuthor}>{el.Author}</p>
              <div className={styles.productButtonContainer}>
                <ProductButton el={el} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedProductsList;
