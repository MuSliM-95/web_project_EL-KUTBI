import React from "react";
import styles from "./Basket.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { serverUrl } from "../../../serverUrl/serverUrl";
import { removeItem } from "../../../app/Reducers/basketReducer";

const Basket = () => {
  const basketProducts = useSelector((state) => state.basketReducer.basket);
  console.log(basketProducts);
  const dispatch = useDispatch();

  const removeItemIsBasket = ({ _id }) => {
    console.log(_id);
    dispatch(removeItem(_id));
  };
  return (
    <div className={styles.basketZeroWrapper}>
      <div
        className={
          basketProducts?.length > 0 ? styles.basketNone : styles.basketZero
        }
      >
        <h2>В корзине пока пусто</h2>
        <p>
          Загляните на главную, чтобы выбрать товары или&nbsp;найдите нужное в
          поиске
        </p>
        <Link className={styles.linkButton} to={"/"}>
          Перейти на главную
        </Link>
      </div>
      <div
        className={
          basketProducts?.length > 0
            ? styles.basketWrapper
            : styles.basketWrapperNone
        }
      >
        <div className={styles.basketProductsBlock}>
          {basketProducts?.map((item, index) => {
            return (
              <div key={index} className={styles.basketProductsList}>
                <img
                  className={styles.productImg}
                  src={`${serverUrl}/${item.imageSrc}`}
                  alt="productsImage"
                />
                <div className={styles.itemInfoBloc}>
                  <em>{item.name}</em>
                  <strong>Цена: {item.price} р</strong>
                </div>
                <div className={styles.itemButtonBlock}>
                  <button type="button">-</button>
                  <p>{item.quantity}</p>
                  <button type="button">+</button>
                </div>
                <div className={styles.productDeleteBlock}>
                  <button
                    onClick={() => removeItemIsBasket(item)}
                    type="button"
                  ></button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.basketPayBlock}>kjnkj</div>
      </div>
    </div>
  );
};

export default Basket;
