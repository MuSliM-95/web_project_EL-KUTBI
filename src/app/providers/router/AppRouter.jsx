import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../../../shared/config/routeConfig/RouteConfig";
import { Suspense } from "react";
import { Loading } from "../../../shared/ui";
import { Layout } from "../../../widgets/ui";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/*"} element={<Layout />}>
        {Object.values(routeConfig).map(
          ({ path, element, layout }) =>
            layout && (
              <Route
                key={path}
                path={path}
                element={element}
              />
            )
        )}
      </Route>
      {Object.values(routeConfig).map(
        ({ path, element, layout }) =>
          !layout && (
            <Route
              key={path}
              path={path}
              element={<Suspense fallback={<Loading />}>{element}</Suspense>}
            />
          )
      )}           
    </Routes>
  );
};
