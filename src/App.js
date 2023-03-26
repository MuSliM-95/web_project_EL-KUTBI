import "./App.scss";
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import FormPage from "./pages/FormPage/FormPage";


function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path={"/*"}  element={<Layout/>}>
          <Route path={"/*"}  element={<MainPage/>}/>
          </Route>
          <Route path={"form"} element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
