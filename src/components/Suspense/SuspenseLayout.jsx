import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../Content/Loading/Loading";

const SuspenseLayout = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Outlet />
    </Suspense>
  );
};

export default SuspenseLayout;
