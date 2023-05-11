import React, { useEffect } from "react";
import styles from "./BooksList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../app/AsyncFetch/productsFetch";
import ProductButton from "../ProductButton/ProductButton";
import { serverUrl } from "../../../serverUrl/serverUrl";
import MoreItemsButton from "../MoreItemsButton/MoreItemsButton";
import FavoritesButton from "../FavoritesButton/FavoritesButton";

const BooksList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  const value = useSelector(state => state.productsReducer.searchValue)
  const productsCount = useSelector(
    (state) => state.productsReducer.productsCount
  );

  useEffect(() => {
    dispatch(getProducts({ productType: "books", count: 10 }));
  }, []);

  const getMoreProducts = () => {
    dispatch(
      getProducts({ productType: "books", count: products?.length * 2 })
    );
  };

  const productsFilter = products?.filter((item) =>
  item.name.toLowerCase().includes(value?.toLowerCase())
);

  return (
    <div className={styles.booksListСontainer}>
      {productsFilter?.map((el, index) => {
        return (
          <div key={index} className={styles.booksList}>
            <div className={styles.booksImageContainer}>
              <img
                className={styles.bookImage}
                src={`${serverUrl}/${el.imageSrc}`}
                alt="books"
              />
              <div className={styles.favorites_button_container}>
                <FavoritesButton el={el} />
              </div>
            </div>
            <div className={styles.bookInfo}>
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
      {products?.length !== productsCount && (
        <div className={styles.moreItemsButtonContainer}>
          <MoreItemsButton getMoreProducts={getMoreProducts} />
        </div>
      )}
    </div>
  );
};

export default BooksList;
