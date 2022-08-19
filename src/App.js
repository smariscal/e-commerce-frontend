import './App.css';
import { CartList } from './components/CartList/CartList';
import { ItemList } from './components/ItemList/ItemList';
import { FormProduct } from './components/FormProduct/FormProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemList />} />
        <Route path='/Cart' element={<CartList />} />
        <Route path='/Product/:id' element={<FormProduct />} />
        <Route path='*' element={<h1 style={{textAlign: 'center'}}>404 - Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
