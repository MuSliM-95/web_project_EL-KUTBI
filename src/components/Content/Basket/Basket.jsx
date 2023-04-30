import React from "react";
import styles from "./Basket.module.scss"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Basket = () => {
const basketProducts = useSelector((state) => state.basketReducer.basket)
console.log(basketProducts);


    return(
        <div className={styles.basketWrapper}>
            <div className={basketProducts?.length > 0 ? styles.basketNone : styles.basketZero}>
             <h2>В корзине пока пусто</h2>
             <p>Загляните на главную, чтобы выбрать товары или&nbsp;найдите нужное в поиске</p>
             <Link className={styles.linkButton} to={"/"}>Перейти на главную</Link>
            </div>
        <div>
         <div></div>
         <div></div>
        </div>
        </div>
    )
}

export default Basket