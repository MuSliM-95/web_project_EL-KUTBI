import React, { useState } from "react";
import styles from "./ProductsList.module.scss";
import { serverUrl } from "../../../serverUrl/serverUrl";
import { useLocation } from "react-router-dom";
import ProductButton from "../ProductButton/ProductButton";
import FavoritesButton from "../FavoritesButton/FavoritesButton";

const ProductsList = () => {
  const locatin = useLocation();

  const el = locatin.state;
  const [element, setElement] = useState(0);

  return (
    <div className={styles.productsListWrapper}>
      <div className={styles.itemWrapper}>
        <div className={styles.itemImagesContainer}>
          {el.image?.map((image, index) => {
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
            <FavoritesButton el={el} />
          </div>
          <img
            className={styles.itemImage}
            src={`${serverUrl}/${el.image[element]?.imageSrc}`}
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
          <strong>{el?.price}Р</strong>
          <p>{el?.name}</p>
          <p className={styles.booksAuthor}>{el?.Author}</p>
          <p className={styles.booksAuthor}>{el?.firm}</p>
          <ProductButton el={el} />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
