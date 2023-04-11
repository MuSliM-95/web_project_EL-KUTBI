import React from "react";
import HealthProductList from "../../components/Content/HealthProductList/HealthProductList";
import styles from "./HealthProductsPage.module.scss"


const HealthProductsPage = () => {
    return (
        <div className={styles.healthProductsPage}>
            <HealthProductList/>
        </div>
    )
}

export default HealthProductsPage