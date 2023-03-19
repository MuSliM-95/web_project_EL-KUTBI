import './App.scss';
import { Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={'header'} element={<Header/>} />
          <Route index element={<ProductList />} />
          <Route path={'form'} element={<Form />} />
        
      </Routes>
    </div>
  );
}

export default App;
