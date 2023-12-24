import React, { Suspense } from "react";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { FixedMenu, Footer, Header, Loading } from "../../../shared/ui";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Suspense fallback={<Loading />}>
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
