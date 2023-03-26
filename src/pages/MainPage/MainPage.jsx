import React from "react";
import Main from "../../components/Content/Main/Main";
import Navigation from "../../components/Layout/Sidebar/Navigation";
import styles from "./MainPage.module.scss"

const MainPage = () => {
    return (
        <div className={styles.MainPageContainer}>
            <Navigation/>
            <Main/>
        </div>
    )
}

export default MainPage