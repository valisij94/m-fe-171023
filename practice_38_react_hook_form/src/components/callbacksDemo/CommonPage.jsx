import AttemptsList from "./AttemptsList";
import { useCallback, useMemo, useState } from "react";

export default function AttemptsPage() {

  const [attempts, setAttempts] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addAttempt = (id, attemptData) => {
    setAttempts( old => ([...old, {id, attemptData}]))
  }

  const handleAddClick = (e) => {
    addAttempt(new Date().getTime(), inputValue);
    setInputValue('');
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  function heavyCalculation() {
    console.log('call heavy function');
    // Something heavy
    return 1;
  };
  const memoizedCalculation = useMemo(heavyCalculation, []);

  const removeAttempt = useCallback( (id) => {
    const result = attempts.filter( attempt => attempt.id !== id );
    setAttempts(result);
  }, [attempts] );

  console.log('Render CommonPage');
  return (

    <div>
      <h3>This component is intended for useCallback demo</h3>
      <p>Here we have an input which should be used for adding login attempts. You should enter something into the input and the press "Add" button. Input data should be added into the attempts list, and the lise will be rendered below.</p>
      <input type="text" placeholder="Attempt Data" value={inputValue} onChange={handleInputChange}></input>
      <button onClick={handleAddClick}>Add</button>
      <h3>This is a result of heavyCalculation</h3>
      <p>{`The 2nd Fibonacci number: ${memoizedCalculation}`}</p>
      <AttemptsList attempts={attempts} removeAttempt={removeAttempt} />
    </div>
  )
}