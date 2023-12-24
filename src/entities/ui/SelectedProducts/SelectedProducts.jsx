import React, { useEffect } from "react";
import styles from "./SelectedProducts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { serverUrl } from "../../../shared/lib/serverUrl/serverUrl";
import { Link, Navigate } from "react-router-dom";
import { getFavorites } from "../../api/async/favoritesFetch";
import { Loading } from "../../../shared/ui";
import { AddToCart, RmFromFavorites } from "../../../features";

const SelectedProducts = () => {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.productsReducer.searchValue);
  const favoritesProduct = useSelector(
    (state) => state.favoritesReducer.productFavorites
  );
  const status = useSelector((state) => state.favoritesReducer.status);
  const userId = useSelector((state) => state.usersReducer.userId);

  const productsFilter = favoritesProduct?.filter((item) =>
    item.name.toLowerCase().includes(value?.toLowerCase())
  );
  useEffect(() => {
    dispatch(getFavorites({ userId }));
  }, []);

  if (status === "loading") return <Loading />;
  if (status === "error") return <Navigate to={"/error"} />;

  return (
    <div className={styles.productListСontainer}>
      <div
        className={
          favoritesProduct?.length > 0
            ? styles.favoritesProductNone
            : styles.favoritesProductZero
        }
      >
        <div>
          <h3>В избранном пока пусто</h3>
          <p>Сохраняйте товары, которые понравились, чтобы долго не искать</p>
          <Link className={styles.linkButton} to={"/"}>
            Выбрать любимый товар❤️
          </Link>
        </div>
      </div>
      {productsFilter?.map((el, index) => {
        return (
          <div key={index} className={styles.productList}>
            <div className={styles.productImageContainer}>
              <img
                className={styles.productImage}
                src={`${serverUrl}/${el.image[0].image}`}
                alt="books"
              />
              <div className={styles.favorites_button_container}>
                <RmFromFavorites el={el} />
              </div>
              <Link state={el} to={"/item"} className={styles.itemInfo}>
                <p>Быстрый просмотр</p>
              </Link>
            </div>
            <div className={styles.productInfo}>
              <strong>{el.price} р</strong>
              <p>{el.name}</p>
              <p className={styles.booksAuthor}>{el.Author}</p>
              <div className={styles.productButtonContainer}>
                <AddToCart el={el} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedProducts;
