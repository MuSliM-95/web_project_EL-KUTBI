import React from "react";
import styles from "./Header.module.scss"
import basket from "../../logo/basket.png"
import menu from "../../logo/Menu (2).png"
import EL_KUTBI from "../../logo/EL-KUTBI.jpg"
import search from "../../logo/search.png";
import catalog from "../../logo/catalog.png"



const Header = () => {

    const stopForm = (e) => {
        e.preventDefault()
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerBloc1}>
                <img className={styles.menuImg} src={menu} alt="menu" />
                <img className={styles.El_kutbiImg} src={EL_KUTBI} alt="EL_KUTBI_logo" />
                <strong className={styles.storeName}>EL-KUTBI</strong>
                <img className={styles.basket} src={basket} alt="sign-in_logo" />
            </div>

            <div className={styles.headerBloc2}>
                <div>
                    <button className={styles.catalog}><img src={catalog} alt="catalog_logo" /> <p>Каталог</p></button>
                    <form onClick={stopForm}>
                        <input className={styles.input} placeholder="Найти книгу или товар" type="text" />
                        <button className={styles.search_button}><img className={styles.search} src={search} alt="search" /></button>
                    </form>
                </div>
            </div>

        </header>
    )
}

export default Header 