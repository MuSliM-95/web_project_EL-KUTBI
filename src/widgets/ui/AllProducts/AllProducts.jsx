import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../app/AsyncFetch/productsFetch";
import { getFavorites } from "../../../entities/api/async/favoritesFetch";
import styles from "./AllProducts.module.scss";
import { serverUrl } from "../../../shared/lib/serverUrl/serverUrl";
import { Link, Navigate } from "react-router-dom";
import { GetMoreProducts, Loading } from "../../../shared/ui";
import { AddToCart, AddToFavorites } from "../../../features";

const AllProducts = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productsReducer.products);
  const value = useSelector((state) => state.productsReducer.searchValue);
  const status = useSelector((state) => state.productsReducer.status);
  const userId = useSelector((state) => state.usersReducer.userId);

  const productsCount = useSelector(
    (state) => state.productsReducer.productsCount
  );

  useEffect(() => {
    dispatch(getProducts({ count: 20 }));
    dispatch(getFavorites({ userId }));
  }, []);

  const getMoreProducts = () => {
    dispatch(getProducts({ count: products?.length * 2 }));
  };

  const productsFilter = products?.filter((item) =>
    item.name.toLowerCase().includes(value?.toLowerCase())
  );

  if (status === "loading") return <Loading />;
  if (status === "error") return <Navigate to={"/error"} />;

  return (
    <div className={styles.productListСontainer}>
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
                <AddToFavorites el={el} />
              </div>
              <Link
                state={el}
                to={`/item/${el._id}`}
                className={styles.itemInfo}
              >
                <p>Быстрый просмотр</p>
              </Link>
            </div>
            <div className={styles.productInfo}>
              <strong>{el.price} р</strong>
              <p>{el.name}</p>
              <p className={styles.booksAuthor}>{el.Author}</p>
              <p className={styles.booksAuthor}>{el.firm}</p>
              <div className={styles.productButtonContainer}>
                <AddToCart el={el} />
              </div>
            </div>
          </div>
        );
      })}
      {products?.length !== productsCount && (
        <div className={styles.moreItemsButtonContainer}>
          <GetMoreProducts getMoreProducts={getMoreProducts} />
        </div>
      )}
    </div>
  );
};

export default AllProducts;
