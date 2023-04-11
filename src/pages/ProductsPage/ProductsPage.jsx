import React from "react";
import ProductList from "../../components/Content/ProductList/ProductList";
import styles from "./ProductsPage.module.scss"

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <ProductList/>
        </div>
    )
}

export default MainPage