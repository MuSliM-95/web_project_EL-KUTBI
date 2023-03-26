import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../app/AsyncFetch/productsFetch";
import ProductButton from "./ProductButton/ProductButton";
import styles from "./ProductList.module.scss"

const ProductList = () => {
     const [state, setState] = useState("")

    const dispatch = useDispatch()
    const products = useSelector((state) => state.productsReducer.products)
 
    useEffect(() => {
        dispatch(getProducts())
    }, [state])

    return (
        <div className={styles.productListСontainer}>
            {products?.map(el => {
                return (
                    <div className={styles.productList}>
                        <img className={styles.productImage} src={`http://localhost:6001/${el.imageSrc}`} alt="books" />
                        <div className={styles.productInfo}>
                        <strong>{el.price} р</strong>
                        <p>{el.name}</p>
                        <p className={styles.booksAuthor}>{el.Author}</p>
                        <ProductButton/>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default ProductList