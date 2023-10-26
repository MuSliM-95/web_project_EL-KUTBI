import React, { useEffect, useState } from "react";
import styles from "./ProductsList.module.scss";
import { serverUrl } from "../../../serverUrl/serverUrl";
import { Navigate, useLocation, useParams } from "react-router-dom";
import ProductButton from "../ProductButton/ProductButton";
import FavoritesButton from "../FavoritesButton/FavoritesButton";
import { useDispatch, useSelector } from "react-redux";
import { getProductId } from "../../../app/AsyncFetch/productsFetch";
import Loading from "../Loading/Loading";

const ProductsList = () => {
  const locatin = useLocation();
  const params = useParams();
  const dispatch = useDispatch();

  const el = locatin?.state;
  const [element, setElement] = useState(0);
  const product = useSelector((state) => state.productsReducer.product);
  const status = useSelector((state) => state.productsReducer.status);

  useEffect(() => {
    if (!el) {
      dispatch(getProductId({ _id: params["*"] }));
    }
  }, []);

  const productObj = el || product;

  if (status === "loading") return <Loading/>
  if (status === "error" ) return <Navigate to={"/error"} />;

  return (
    <div className={styles.productsListWrapper}>
      <div className={styles.itemWrapper}>
        <div className={styles.itemImagesContainer}>
          {productObj?.image?.map((image, index) => {
            return (
              <img
                key={index}
                onMouseOver={() => setElement(index)}
                className={styles.itemaImages}
                src={`${serverUrl}/${image?.imageSrc}`}
                alt="Products_image"
              />
            );
          })}
        </div>
        <figure>
          <div className={styles.favorites_button_container}>
            <FavoritesButton productObj={productObj} />
          </div>
          <img
            className={styles.itemImage}
            src={`${serverUrl}/${productObj?.image[element]?.imageSrc}`}
            alt="Products_image"
          />
          <figcaption>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sit
            soluta sequi, est, totam porro ex eius recusandae error minima eos
            deserunt, doloribus doloremque adipisci alias quo facilis sunt
            asperiores.
          </figcaption>
        </figure>
        <div className={styles.itemInfoBlock}>
          <strong>{productObj?.price}Р</strong>
          <p>{el?.name}</p>
          <p className={styles.booksAuthor}>{productObj?.Author}</p>
          <p className={styles.booksAuthor}>{productObj?.firm}</p>
          <ProductButton productObj={productObj} />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
