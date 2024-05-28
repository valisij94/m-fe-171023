/*
2. Делаем компонент для рендеринга списка товаров `ProductsList`. Они должны отображаться в виде сетки из 4 колонок.
Товары берем запросом с адреса `https://dummyjson.com/products` при монтировании компонента. Товары стоит хранить в стейте компонента.
*/

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";

import {startProductsRequestAction, finishProductsRequestAction, errorProductsRequestAction} from '../../store/actions/productsActions.js';

export default function ProductList() {

  const dispatch = useDispatch();

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

  const { products, isFetching } = useSelector( state => state.products );

  return (
    <div className="productListContainer">
      {
        isFetching ? <p>Please, wait...</p> :
        products && products.map( product => {
          return <ProductCard key={product.id} product={product}/>
        })
      }
    </div>
  )
}