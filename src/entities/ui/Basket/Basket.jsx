import React, { useEffect, useState } from "react";
import styles from "./Basket.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { serverUrl } from "../../../shared/lib/serverUrl/serverUrl";
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeItem,
} from "../../api/slice/basketReducer";
import { itemInfo } from "../../../shared/lib/hooks/item";
import { getUser } from "../../../app/AsyncFetch/userFetch";
import { addProductsBasket } from "../../api/async/basketFetch";
import DeleteIcon from '@mui/icons-material/Delete';
import { Loading } from "../../../shared/ui";




const Basket = () => {
  const basketProducts = useSelector((state) => state.basketReducer.basket);
  const user = useSelector((state) => state.usersReducer.user);
  const token = useSelector((state) => state.usersReducer.token);
  const userId = useSelector((state) => state.usersReducer.userId);
  const status = useSelector((state) => state.basketReducer.status);

  const [render, setRender] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser({ userId }));
    if (token) {
      dispatch(addProductsBasket({ userId, basketArray: basketProducts }));
    }
  }, [render]);
  
  console.log(serverUrl);
  const removeItemIsBasket = ({ _id }) => {
    dispatch(removeItem(_id));
    setRender(!render);
  };

  const incrementItem = ({ _id }) => {
    dispatch(incrementItemQuantity(_id));
    setRender(!render);
  };
  const decrementItem = ({ _id }) => {
    dispatch(decrementItemQuantity(_id));
    setRender(!render);
  };

  const { totalPrice, totalQuantity, totalDelivery, totalAmount } =
    itemInfo(basketProducts);
  
  if (status === "loading") return <Loading />;
  if (status === "error") return <Navigate to={"/error"} />;
  
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
                  src={`${serverUrl}/${item.image[0].image}`}
                  alt="productsImage"
                />
                <div className={styles.itemInfoBloc}>
                  <em>{item.name}</em>
                  <strong>Цена: {item.price} р</strong>
                </div>
                <div className={styles.itemButtonBlock}>
                  <button onClick={() => decrementItem(item)} type="button">
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => incrementItem(item)} type="button">
                    +
                  </button>
                </div>
                <div className={styles.productDeleteBlock}>
                    <DeleteIcon onClick={() => removeItemIsBasket(item)}/>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.basketPayBlock}>
          <div className={styles.itemPayInfoBlock}>
            <Link
              className={styles.deliveryLink}
              to={"/form"}
              state={{ user, userId, status, page: "/basket" }}
            >
              Адрес
            </Link>
            <div className={styles.cityTextBlock}>
              <p>Город {user?.address}</p>
            </div>
            <p>3-10 дней</p>
            <Link
              to={"/inDeveloping"}
              className={styles.paymentMethodLink}
              state={{ page: "/basket" }}
            >
              Выбрать способ оплаты
            </Link>
            <div>
              <p>Товары {totalQuantity} шт.</p>
              <p>{totalPrice} р</p>
            </div>
            <div>
              <p>Доставка</p>
              <p>{totalDelivery}</p>
            </div>
            <div>
              <strong>Итого</strong>
              <strong>{totalAmount}</strong>
            </div>
            <button type="button">Заказать</button>
            <div className={styles.inputCheckboxContainer}>
              <Link
                className={styles.linkAgreement}
                to={"/inDeveloping"}
                state={{ page: "/basket" }}
              >
                Согласен с условиями
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
