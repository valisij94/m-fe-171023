/*
4. Добавим валидацию в форму. Нужно, чтобы при нажатии на кнопку "Сохранить", запускалась бы валидация. Необходимо контролировать, что поле "Название" непустое. Если поле пустое - нужно под ним показывать параграф с текстом "Заполните это поле!".
*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {

  const [formState, setFormState] = useState({
    name: {
      value: '',
      error: ''
    },
    description: {
      value: '',
      error: ''
    },
    price: {
      value: '',
      error: ''
    },
  });

  const navigate = useNavigate();

  const saveBtnClickHandler = () => {
    const newState = {};
    const stateEntries = Object.entries(formState);
    for (let [key, inputData] of stateEntries) {
      newState[key] = { ...inputData };
      newState[key].error = !inputData.value ? 'Fill this field' : '';
    }
    setFormState(newState);

    navigate('/');
  }

  const inputChangeHandler = (e) => {
    setFormState( prev => ({
      ...prev,
      [e.target.name]: {
        ...prev[e.target.name],
        value: e.target.value
      }
    }) );
  }

  return (
    <div className="productFormContainer">
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formState.name.value}
        onChange={inputChangeHandler}
      />
      { formState.name.error && <p>Fill this field!</p>}
      <input
        type="text"
        placeholder="Price"
        name="price"
        value={formState.price.value}
        onChange={inputChangeHandler}
      />
      { formState.price.error && <p>Fill this field!</p>}
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={formState.description.value}
        onChange={inputChangeHandler}
      />
      { formState.description.error && <p>Fill this field!</p>}
      <select>
        <option value="electronics">Electronics</option>
        <option value="toys">Toys</option>
      </select>
      <button onClick={saveBtnClickHandler}>Save</button>
    </div>
  );
}