import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "./PersonalAccount.module.scss";
import { removeToken } from "../../../app/Reducers/usersReducer";
import { getUser } from "../../../app/AsyncFetch/userFetch";
import { clearBasket } from "../../../app/Reducers/basketReducer";
import ProfileDelete from "../ProfileDelete/ProfileDelete";
import Loading from "../Loading/Loading";

const PersonalAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refDeleteBlock = useRef(null);

  const token = useSelector((state) => state.usersReducer.token);
  const userId = useSelector((state) => state.usersReducer.userId);
  const user = useSelector((state) => state.usersReducer.user);
  const status = useSelector((state) => state.usersReducer.status);


  useEffect(() => {
    dispatch(getUser({ userId }));
  }, []);

  if (!token) return <Navigate to={"/signinUp"} />;
  
  const exit = () => {
    dispatch(removeToken());
    dispatch(clearBasket());
    return navigate("/");
  };

  const removeProfileBlock = () => {
    window.scrollTo(0,0)
    document.body.style.overflow = "hidden";
    refDeleteBlock.current.classList.toggle(styles.deleteUserWrapperNone);
    refDeleteBlock.current.classList.toggle(styles.deleteUserWrapperActive);
  };
  const removeProfileBlockNone = () => {
    document.body.style.overflow = "auto";
    refDeleteBlock.current.classList.toggle(styles.deleteUserWrapperActive);
    refDeleteBlock.current.classList.toggle(styles.deleteUserWrapperNone);
  };


  if (status === "loading") return <Loading />;
  if (status === "error") return <Navigate to={"/error"} />;

  return (
    <div className={styles.wrapperPersonalAccount}>
      <div className={styles.personalAccountBlock}>
        <div className={styles.personalAccountInfo}>
          <div className={styles.infoHeaderBlock}>
            <Link
              className={styles.personalInfoLink}
              to={"/form"}
              state={{user, userId, status, page: "/usersAccount" }}
            >
              Личная информация
            </Link>
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
          <Link to={"/inDeveloping"} state={{page: "/usersAccount"}}>Все заказы</Link>
          <Link to={"/inDeveloping"} state={{page: "/usersAccount"}}>Только активные заказы</Link>
          <Link to={"/inDeveloping"} state={{page: "/usersAccount"}}>Статус заказов</Link>
        </div>
        <div className={styles.settingsBlock}>
          <h2>Профиль</h2>
          <div className={styles.buttonExitContainer}>
            <button
              className={styles.buttonExit}
              type="button"
              onClick={removeProfileBlock}
            >
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
      <div
        onClick={removeProfileBlockNone}
        ref={refDeleteBlock}
        className={styles.deleteUserWrapperNone}
       >
       <ProfileDelete/>
      </div>
    </div>
  );
};

export default PersonalAccount;
