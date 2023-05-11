import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import styles from "./PersonalAccount.module.scss";
import { removeToken } from "../../../app/Reducers/usersReducer";
import { getUser } from "../../../app/AsyncFetch/userFetch";

const PersonalAccount = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.usersReducer.token);
  const userId = useSelector((state) => state.usersReducer.userId);
  const user = useSelector((state) => state.usersReducer.user);

  useEffect(() => {
    dispatch(getUser({ userId }));
  }, []);

  console.log(user);
  if (!token) {
    return <Navigate to={"/signinUp"} />;
  }

  const exit = () => {
    dispatch(removeToken());
  };

  return (
    <div className={styles.wrapperPersonalAccount}>
      <div className={styles.personalAccountBlock}>
        <div className={styles.personalAccountInfo}>
          <div>
            <h2>Личная информация</h2>
          </div>
          <div>
            <p>
              <strong>Телефон: </strong> {user?.phoneNumber}
            </p>
          </div>
          <div>
            <p>
              <strong>Имя: </strong> {user?.name}
            </p>
          </div>
          <div>
            <p>
              {" "}
              <strong>Адрес доставки: </strong>
              {user?.address}
            </p>
          </div>
          <div>
            <p>
              {" "}
              <strong>Почтовый индекс: </strong>
              {user?.postal_code}
            </p>
          </div>
          <div>
            <a href={`https://wa.me/${user?.contact}`} target="_blank">
              <strong>WhatsApp: </strong>
              {user?.contact}
            </a>
          </div>
        </div>
        <div className={styles.orderBlock}>
          <h2>Мои заказы</h2>
          <Link to={"#"}>Все заказы</Link>
          <Link to={"#"}>Статус заказов</Link>
          <Link to={"#"}>Только активные заказы</Link>
        </div>
        <div className={styles.settingsBlock}>
          <h2>Профиль</h2>
          <div className={styles.buttonExitContainer}>
            <button className={styles.buttonExit} type="button" onClick={exit}>
              Удалить
            </button>
          </div>
          <div className={styles.buttonExitContainer}>
            <button className={styles.buttonExit} type="button" onClick={exit}>
              Выйти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccount;
