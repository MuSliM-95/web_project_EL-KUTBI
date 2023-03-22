import "./App.scss";
import { Routes, Route } from "react-router-dom"
import ProductList from "./components/Content/ProductList/ProductList";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import FormPage from "./pages/FormPage/FormPage";


function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path={"/*"}  element={<Layout/>}>
          <Route path={"main"}  element={<MainPage/>}/>
          <Route index element={<ProductList />} />
          <Route path={"form"} element={<FormPage />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
