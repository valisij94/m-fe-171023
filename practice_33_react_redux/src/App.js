
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';
import ErrorPage from './pages/ErrorPage';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction } from './store/actions/counterActions';
import { useEffect } from 'react';
import { errorProductsRequestAction, finishProductsRequestAction, startProductsRequestAction } from './store/actions/productsActions';
function App() {


  const dispatch = useDispatch();

  const incrementClickHandler = () => {
    dispatch( incrementAction() );
  }

  const decrementClickHandler = () => {
    dispatch( decrementAction() );
  }

  useEffect( () => {
    dispatch( startProductsRequestAction() );
    fetch('https://dummyjson.com/products')
      .then( resp => resp.json())
      .then( data => {
        dispatch( finishProductsRequestAction(data.products) );
      })
      .catch( error => {
        dispatch(errorProductsRequestAction(error));
      });
  }, []);

  const { products, isFetching, error } = useSelector( state => state.products );

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

        <button onClick={incrementClickHandler}>Increment</button>
        <button onClick={decrementClickHandler}>Decrement</button>

        { isFetching && <p>Please, wait!!!</p> }
        {
          products && products.map( prod => {
            return (
              <p key={prod.id}>{prod.title}</p>
            )
          })
        }
        { error && <p className='errorText'>{error}</p>}

      </div>
    </Router>
  );
}

export default App;
