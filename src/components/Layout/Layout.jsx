import React, { Suspense } from "react";
import styles from "./Layout.module.scss";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import FixedMenu from "./FixedMenu/FixedMenu";
import Loading from "../Content/Loading/Loading";

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Suspense fallback={<Loading/>}>
          <Outlet />
        </Suspense>
      </main>
      <nav>
        <FixedMenu />
      </nav>
      <Footer />
    </>
  );
};

export default Layout;
