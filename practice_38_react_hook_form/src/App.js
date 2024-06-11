
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';
import ErrorPage from './pages/ErrorPage';
import ProductsPage from './pages/ProductsPage';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import ProductContextProvider from './context/ProductContextProvider';
import CommonPage from '../src/components/callbacksDemo/CommonPage.jsx';

function App() {

  const themeContext = useContext(ThemeContext);

  return (
    <Router>
      <div className={`App ${themeContext.theme}`}>
        <h1>Hello World!</h1>
        <button onClick={themeContext.toggleTheme}>Toggle theme</button>
        <div>
          <NavLink to='/'>Home Page</NavLink>
          <br/>
          <NavLink to='/product'>Add Product</NavLink>
          <br></br>
          <NavLink to='/products'>All Products List</NavLink>
          <br></br>
          <NavLink to='/common'>Callbacks Demo</NavLink>
        </div>

        <ProductContextProvider>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/product' element={<AddProductPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/common' element={<CommonPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </ProductContextProvider>

      </div>
    </Router>
  );
}

export default App;
