import "./App.scss";
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import FormPage from "./pages/FormPage/FormPage";
import BooksPage from "./pages/BooksPage/BooksPage";
import CosmeticsProductsPage from "./pages/CosmeticsProductsPage/CosmeticsProductsPage";
import HygieneProductsPage from "./pages/HygieneProductsPage/HygieneProductsPage";
import HealthProductsPage from "./pages/HealthProductsPage/HealthProductsPage";


function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path={"/*"}  element={<Layout/>}>
          <Route path={"/*"}  element={<ProductsPage/>}/>
          <Route path={"books"} element={<BooksPage/>}/>
          <Route path={"cosmetics"} element={<CosmeticsProductsPage/>}/>
          <Route path={"hygiene"} element={<HygieneProductsPage/>}/>
          <Route path={"health"} element={<HealthProductsPage/>}/>
          </Route>
          <Route path={"form"} element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
