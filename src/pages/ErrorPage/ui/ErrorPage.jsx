import React from "react";
import styles from "./ErrorPage.module.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={styles.errorWrapper}>
      <div>
        <h1>500</h1>
        <h1>Ошибка сервера</h1>
        <p>Что-то пошло не так... Мы уже работаем над проблемой</p>
        <Link to={"/"}>Вернуться на главную</Link>
      </div>
    </div>
  );
};
export default ErrorPage;
