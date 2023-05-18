import React, { useEffect } from "react";
import styles from "./CosmeticsProductsList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../app/AsyncFetch/productsFetch";
import ProductButton from "../ProductButton/ProductButton";
import { serverUrl } from "../../../serverUrl/serverUrl";
import MoreItemsButton from "../MoreItemsButton/MoreItemsButton";
import FavoritesButton from "../FavoritesButton/FavoritesButton";
import { Link, Navigate } from "react-router-dom";
import loadingImage from "../../../logo/free-animated-icon-book-10164261.gif"

const CosmeticsProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  const value = useSelector((state) => state.productsReducer.searchValue);
  const productsCount = useSelector(
    (state) => state.productsReducer.productsCount
  );
  const status = useSelector((state) => state.productsReducer.status)

  useEffect(() => {
    dispatch(getProducts({ productType: "cosmetics", count: 10 }));
  }, []);

  const getMoreProducts = () => {
    dispatch(
      getProducts({ productType: "cosmetics", count: products?.length * 2 })
    );
  };

  const productsFilter = products?.filter((item) =>
    item.name.toLowerCase().includes(value?.toLowerCase())
  );

  if(status === "loading") {
    return(
      <div className={styles.loadingBlock}>
        <img src={loadingImage} alt="loadingImage" />
      </div>
    )
  }
  if(status === "error") {
    return <Navigate to={"/error"}/>
  }
  return (
    <div className={styles.productListСontainer}>
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
                <FavoritesButton el={el} />
              </div>
              <Link state={el} to={"/item"} className={styles.itemInfo}>
                <p>Быстрый просмотр</p>
              </Link>
            </div>
            <div className={styles.productInfo}>
              <strong>{el.price} р</strong>
              <p>{el.name}</p>
              <p className={styles.booksAuthor}>{el.country}</p>
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

export default CosmeticsProductsList;
