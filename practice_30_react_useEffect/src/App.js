import { useState } from 'react';
import './App.css';
import SimpleList from './components/simpleList/SimpleList';

function App() {

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

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <p>{clicksCount}</p>

      <SimpleList
        listSource={todoList}
      />

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
