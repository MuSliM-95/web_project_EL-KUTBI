import React from "react";
import styles from "./ProductListPage.module.scss"
import ProductsList from "../../components/Content/ProductsList/ProductsList";
// import { useLocation } from "react-router-dom";

const ProductListPage = () => {
    // const locatin = useLocation()
    // const {el} = locatin.state
    return (
        <div className={styles.productListPage}>
            <ProductsList />
        </div>
    )
}

export default ProductListPage