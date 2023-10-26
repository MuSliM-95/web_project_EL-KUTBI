import styles from "./App.module.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import InDeveloping from "./pages/InDeveloping/ui/InDeveloping";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import SuspenseLayout from "./components/Suspense/SuspenseLayout";
import { ProductsListPageAsync } from "./pages/ProductListPage/ProductsListAsync";
import { BasketPageAsync } from "./pages/BasketPage/BasketPageAsync";
import { ErrorPageAsync } from "./pages/ErrorPage/ErrorPageAsync";
import { RegistrationPageAsync } from "./pages/RegistrationPage/RegistrationPageAsync";
import { SelectedProductsListPageAsync } from "./pages/SelectedProductsListPage/SelectedProductsListPageAsync";
import { PersonalAccountPageAsync } from "./pages/PersonalAccountPage/PersonalAccountPageAsync";
import { FormPageAsync } from "./pages/FormPage/FormPageAsync";
import { LoginPageAsync } from "./pages/LoginPage/LoginPageAsync";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path={"/*"} element={<Layout />}>
            <Route path={"/*"} element={<ProductsPage />} />
            <Route
              path={"usersAccount"}
              element={<PersonalAccountPageAsync />}
            />
            <Route
              path={"favorites"}
              element={<SelectedProductsListPageAsync />}
            />
            <Route path={"basket"} element={<BasketPageAsync />} />
            <Route path={"form"} element={<FormPageAsync />} />
            <Route path={"inDeveloping"} element={<InDeveloping />} />
            <Route path={"item/*"} element={<ProductsListPageAsync />} />
          </Route>
          <Route path={"/*"} element={<SuspenseLayout />}>
            <Route path={"signinUp"} element={<RegistrationPageAsync />} />
            <Route path={"login"} element={<LoginPageAsync />} />
            <Route path={"error"} element={<ErrorPageAsync />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
