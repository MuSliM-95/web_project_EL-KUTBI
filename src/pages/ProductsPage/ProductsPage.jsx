import React from "react";
import styles from "./ProductsPage.module.scss"
import ProductsList from "../../components/Content/ProductsList/ProductsList";

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <ProductsList/>
        </div>
    )
}

export default MainPage