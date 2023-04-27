import React, { useEffect } from "react";
import styles from "./HygieneProductsList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../app/AsyncFetch/productsFetch";
import ProductButton from "../ProductList/ProductButton/ProductButton";
import { serverUrl } from "../../../serverUrl/serverUrl";
import MoreItemsButton from "../MoreItemsButton/MoreItemsButton";
import FavoritesButton from "../FavoritesButton/FavoritesButton";

const HygieneProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  const productsCount = useSelector(
    (state) => state.productsReducer.productsCount
  );

  useEffect(() => {
    dispatch(getProducts({ productType: "hygiene", count: 10 }));
  }, []);

  const getMoreProducts = () => {
    dispatch(
      getProducts({ productType: "hygiene", count: products?.length * 2 })
    );
  };

  return (
    <div className={styles.productListСontainer}>
      {products?.map((el, index) => {
        return (
          <div key={index} className={styles.productList}>
            <div className={styles.productImageContainer}>
              <img
                className={styles.productImage}
                src={`${serverUrl}/${el.imageSrc}`}
                alt="books"
              />
              <div className={styles.favorites_button_container}>
                <FavoritesButton el={el}/>
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
      {products?.length !== productsCount && (
        <div className={styles.moreItemsButtonContainer}>
          <MoreItemsButton getMoreProducts={getMoreProducts} />
        </div>
      )}
    </div>
  );
};

export default HygieneProductsList;
