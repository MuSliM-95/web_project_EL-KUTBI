import styles from "./App.module.scss"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import FormPage from "./pages/FormPage/FormPage";
import BooksPage from "./pages/BooksPage/BooksPage";
import CosmeticsProductsPage from "./pages/CosmeticsProductsPage/CosmeticsProductsPage";
import HygieneProductsPage from "./pages/HygieneProductsPage/HygieneProductsPage";
import HealthProductsPage from "./pages/HealthProductsPage/HealthProductsPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import TestPage from "./pages/TestPage/TestPage";
import PersonalAccountPage from "./pages/PersonalAccount/PersonalAccountPage";
import SelectedProductsListPage from "./pages/SelectedProductsListPage/SelectedProductsListPage";
import BasketPage from "./pages/BasketPage/BasketPage";


function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter >
      <Routes>
          <Route path={"/*"}  element={<Layout/>}>
          <Route path={"/*"}  element={<ProductsPage/>}/>
          <Route path={"books"} element={<BooksPage/>}/>
          <Route path={"cosmetics"} element={<CosmeticsProductsPage/>}/>
          <Route path={"hygiene"} element={<HygieneProductsPage/>}/>
          <Route path={"health"} element={<HealthProductsPage/>}/>
          <Route path={"testPage"} element={<TestPage/>}/>
          <Route path={"usersAccount"} element={<PersonalAccountPage/>}/>
          <Route path={"favorites"} element={<SelectedProductsListPage/>}/>
          <Route path={"basket"} element={<BasketPage/>}/>
          <Route path={"form"} element={<FormPage />} />
          </Route>
          <Route path={"signinUp"} element={<RegistrationPage/>}/>
          <Route path={"login"} element={<LoginPage/>}/>
      </Routes>
      </BrowserRouter>
      </div> 
  );
}
 
export default App;
