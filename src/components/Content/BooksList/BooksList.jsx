import React, { useEffect } from "react";
import styles from "./BooksList.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../app/AsyncFetch/productsFetch";
import ProductButton from "../ProductList/ProductButton/ProductButton";

const BooksList = () => {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.productsReducer.products)
 
    useEffect(() => {
        dispatch(getProducts())
    })

    return (
        <div className={styles.booksListСontainer}>
        {products?.map(el => {
            if(el.productType === "books") {
                return (
                    <div className={styles.booksList}>
                        <div className={styles.booksImageContainer}>
                        <img className={styles.bookImage} src={`http://localhost:6001/${el.imageSrc}`} alt="books" />
                        <button className={styles.favorites_book_button}></button>
                        </div>
                        <div className={styles.bookInfo}>
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

export default BooksList