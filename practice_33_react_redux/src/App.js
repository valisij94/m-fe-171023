
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';
import ErrorPage from './pages/ErrorPage';
function App() {


  return (
    <Router>
      <div className="App">
        <h1>Hello World!</h1>

        <div>
          <NavLink to='/'>Home Page</NavLink>
          <br/>
          <NavLink to='/product'>Add Product</NavLink>
        </div>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/product' element={<AddProductPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
