import React from "react";
import styles from "./Layout.module.scss";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import FixedMenu from "./FixedMenu/FixedMenu";

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Outlet />
      </main>
      <nav>
        <FixedMenu />
      </nav>
      <Footer />
    </>
  );
};

export default Layout;
