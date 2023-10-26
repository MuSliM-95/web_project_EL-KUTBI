import React from "react";
import styles from "./InDeveloping.module.scss";
import { Link, useLocation } from "react-router-dom";

const InDeveloping = () => {
  const location = useLocation();

  const { page } = location.state;

  return (
    <div className={styles.inDeveloping}>
      <div className={styles.block}>
        <strong>Эта страница еще в разработке</strong>
        <Link to={page}>Вернуться на предыдущую страницу</Link>
      </div>
    </div>
  );
};

export default InDeveloping;
