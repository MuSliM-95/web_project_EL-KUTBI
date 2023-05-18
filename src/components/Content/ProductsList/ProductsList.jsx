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

  console.log(el);
  return (
    <div className={styles.productsListWrapper}>
      <div className={styles.itemWrapper}>
        <div className={styles.itemImagesContainer}>
          <img
            onMouseOver={() => setElement(0)}
            className={styles.itemaImages}
            src={`${serverUrl}/${el.image[0]?.imageSrc}`}
            alt="Products_image"
          />
          <img
            onMouseOver={() => setElement(1)}
            className={styles.itemaImages}
            src={`${serverUrl}/${el.image[1]?.imageSrc}`}
            alt="Products_image"
          />
          <img
            onMouseOver={() => setElement(2)}
            className={styles.itemaImages}
            src={`${serverUrl}/${el.image[2]?.imageSrc}`}
            alt="Products_image"
          />
          <img
            onMouseOver={() => setElement(3)}
            className={styles.itemaImages}
            src={`${serverUrl}/${el.image[3]?.imageSrc}`}
            alt="Products_image"
          />
        </div>
        <figure>
          <div className={styles.favorites_button_container}>
          <FavoritesButton el={el}/>
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
