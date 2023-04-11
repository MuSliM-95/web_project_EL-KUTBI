import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../app/AsyncFetch/productsFetch";
import ProductButton from "./ProductButton/ProductButton";
import styles from "./ProductList.module.scss";
import {serverUrl} from "../../../serverUrl/serverUrl"

const ProductList = () => {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.productsReducer.products)
 
    useEffect(() => {
        dispatch(getProducts())
    },[])

         console.log(products);

    return (
        <div className={styles.productListСontainer}>
            {products?.map((el, index) => {
                return (
                    <div key={index} className={styles.productList}>
                        <div className={styles.productImageContainer}>
                        <img className={styles.productImage} src={`${serverUrl}/${el.imageSrc}`} alt="books" />
                        <button className={styles.favorites_book_button}></button>
                        </div>
                        <div className={styles.productInfo}>
                        <strong>{el.price} р</strong>
                        <p>{el.name}</p>
                        <p className={styles.booksAuthor}>{el.Author}</p>
                        <p className={styles.booksAuthor}>{el.firm}</p>
                        <div className={styles.productButtonContainer}>
                        <ProductButton el={el}/>
                        </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default ProductList