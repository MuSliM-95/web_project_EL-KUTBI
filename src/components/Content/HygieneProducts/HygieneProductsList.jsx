import React, { useEffect } from "react";
import styles from "./HygieneProductsList.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../app/AsyncFetch/productsFetch";
import ProductButton from "../ProductList/ProductButton/ProductButton";

const HygieneProductsList = () => {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.productsReducer.products)
 
    useEffect(() => {
        dispatch(getProducts())
    })

    return (
        <div className={styles.productListСontainer}>
        {products?.map(el => {
            if(el.productType === "hygiene") {
                return (
                    <div className={styles.productList}>
                    <div className={styles.productImageContainer}>
                    <img className={styles.productImage} src={`http://localhost:6001/${el.imageSrc}`} alt="books" />
                    <button className={styles.favorites_book_button}></button>
                    </div>
                    <div className={styles.productInfo}>
                    <strong>{el.price} р</strong>
                    <p>{el.name}</p>
                    <p className={styles.booksAuthor}>{el.Author}</p>
                    <div className={styles.productButtonContainer}>
                    <ProductButton/>
                    </div>
                    </div>
                </div>
                )
            }
        })}

    </div>
    )
}

export default HygieneProductsList