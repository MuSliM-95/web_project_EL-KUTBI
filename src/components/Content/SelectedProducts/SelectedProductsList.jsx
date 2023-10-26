import React, { useEffect } from "react";
import styles from "./SelectedProductsList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import ProductButton from "../ProductButton/ProductButton";
import { serverUrl } from "../../../serverUrl/serverUrl";
import { Link, Navigate } from "react-router-dom";
import FavoritesRemoveButton from "../FavoritesRemoveButton/FavoritesRemoveButton";
import { getFavorites } from "../../../app/AsyncFetch/favoritesFetch";
import Loading from "../Loading/Loading";

const SelectedProductsList = () => {
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
                src={`${serverUrl}/${el.image[0].imageSrc}`}
                alt="books"
              />
              <div className={styles.favorites_button_container}>
                <FavoritesRemoveButton el={el} />
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
