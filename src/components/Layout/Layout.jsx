import React from "react";
import styles from "./Layout.module.scss"
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
// import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Main from "../Content/Main/Main";


const Layout = () => {
    return (
        <div >
            <Header />
            <Container fluid className={styles.wrapper} >
            </Container>
            <Footer />
        </div>
    )
}

export default Layout