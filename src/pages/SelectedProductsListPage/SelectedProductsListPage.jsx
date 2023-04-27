import React from "react";
import SelectedProductsList from "../../components/Content/SelectedProducts/SelectedProductsList";
import styles from "./SelectedProductsListPage.module.scss"

const SelectedProductsListPage = () => {
    return (
        <div className={styles.selectedProductsListPage}>
          <SelectedProductsList/>
        </div>
    )
}

export default SelectedProductsListPage