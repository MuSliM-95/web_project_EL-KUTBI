import React from "react";
import CosmeticsProductsList from "../../components/Content/CosmeticsProducts/CosmeticsProductsList";
import styles from "./CosmeticsProductsPage.module.scss"


const CosmeticsProductsPage = () => {
    return (
        <div className={styles.cosmeticsProductsPage}>
            <CosmeticsProductsList/>
        </div>
    )
}

export default CosmeticsProductsPage