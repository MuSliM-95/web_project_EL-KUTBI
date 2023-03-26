import React from "react";
import styles from "./Layout.module.scss"
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";




const Layout = () => {
    return (
        <div >
            <Header />
            <Container fluid className={styles.wrapper} >
                <Outlet />
            </Container>
            <Footer />
        </div>
    )
}

export default Layout