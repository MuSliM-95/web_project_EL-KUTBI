import React, { useEffect } from "react";
import styles from "./SelectedProductsList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../app/AsyncFetch/productsFetch";
import ProductButton from "../ProductList/ProductButton/ProductButton";
import FavoritesButton from "../FavoritesButton/FavoritesButton";
import { serverUrl } from "../../../serverUrl/serverUrl";

const SelectedProductsList = () => {
  const dispatch = useDispatch();
//   const products = useSelector((state) => state.productsReducer.products);
  const favoritesProduct = useSelector(
    (state) => state.favoritesReducer.productFavorites
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={styles.productListСontainer}>
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
                  <ProductButton />
                </div>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default SelectedProductsList;
