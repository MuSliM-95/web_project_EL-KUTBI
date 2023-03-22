import React from "react";
import styles from "./Layout.module.scss"
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Container } from "react-bootstrap";



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