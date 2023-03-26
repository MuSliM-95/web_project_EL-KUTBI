import React, { useEffect } from "react"
import ProductList from "../ProductList/ProductList"
import styles from "./Main.module.scss"



const Main = () => {

    return (
        <main className={styles.main}>
            <ProductList />
        </main>
    )
}

export default Main