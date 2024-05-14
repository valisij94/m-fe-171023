import { useState } from 'react';
import './App.css';
import SimpleList from './components/simpleList/SimpleList';
import { useEffect } from 'react';
import SimpleTimer from './components/simpleTimer/SimpleTimer';

function App() {

  /*
  9. Теперь пришла пора поработать с бэком. Нужно при монтировании компонента `App` отправлять запрос списка товаров по адресу `https://dummyjson.com/products`. Результат (массив товаров) нужно будет сохранить в локальном стейте компонента, и вывести его в консоль.
  */

  const [products, setProducts] = useState([]);

  useEffect( () => {
    fetch('https://dummyjson.com/products')
      .then( resp => resp.json())
      .then( data => setProducts(data.products));
  }, []);

  useEffect( () => {
    console.log('Products 1', products)
  }, [products]);

  const [clicksCount, setClicksCount] = useState(0);

  const  [todoList, setTodoList] = useState( ['Learn JS', 'Learn CSS', 'Learn HTML'] );

  const incrementCounter = () => {
    setClicksCount( prev => prev + 1 );
  }

  const decrementCounter = () => {
    setClicksCount( prev => prev - 1 );
  }

  const addTodoHandler = () => {
    setTodoList( prev => ( [...prev, inputState] ) );
  }

  const [inputState, setInputState] = useState('');

  const addInputChangeHandler = (event) => {
    setInputState(event.target.value);
  }

  const dropTodoHandler = () => {
    setTodoList( prev => {
      let newState = [...prev];
      newState.pop();
      return newState;
    } );
  }

  const [showList, setShowList] = useState(true);
  const showHideListClickHandler = () => {
    setShowList( prev => !prev );
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <p>{clicksCount}</p>


      <button onClick={showHideListClickHandler}>Show/Hide List</button>
      {
        showList &&
        <SimpleList
          listHeaderText="Header"
          listSource={todoList}
        />
      }

      <input
        onChange={addInputChangeHandler}
        type='text'
        placeholder="Todo Name"
        value={inputState}
      ></input>
      <button onClick={addTodoHandler}>Add todo</button>
      <button onClick={dropTodoHandler}>Drop todo</button>
    </div>
  );
}

export default App;
