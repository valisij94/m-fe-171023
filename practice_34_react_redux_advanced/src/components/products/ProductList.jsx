import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";

import {startProductsRequestAction, finishProductsRequestAction, errorProductsRequestAction} from '../../store/actions/productsActions.js';

export default function ProductList() {

  const dispatch = useDispatch();

  const { products, isFetching } = useSelector( state => state.products );
  const categoryFromState = useSelector( state => state.filter.category );

  useEffect( () => {
    if (products.length === 0 && !isFetching) {
      dispatch( startProductsRequestAction() );
      fetch('https://dummyjson.com/products')
        .then( resp => resp.json())
        .then( data => {
          dispatch( finishProductsRequestAction(data.products) );
        })
        .catch( error => {
          dispatch(errorProductsRequestAction(error));
        });
    }
  }, []);

  return (
    <div className="productListContainer">
      {
        isFetching ? <p>Please, wait...</p> :
        products && products
          // categoryFromState === ''
          .filter( product => product.category === categoryFromState || !categoryFromState )
          .map( prod => <ProductCard key={prod.id} product={prod}/> )
      }
    </div>
  )
}