import React from "react";
import BooksList from "../../components/Content/BooksList/BooksList";
import styles from "./BooksPage.module.scss"

const BooksPage = () => {
    return (
        <div className={styles.booksPage}>
            <BooksList/>
        </div>
    )
}

export default BooksPage