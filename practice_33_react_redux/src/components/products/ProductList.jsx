/*
2. Делаем компонент для рендеринга списка товаров `ProductsList`. Они должны отображаться в виде сетки из 4 колонок.
Товары берем запросом с адреса `https://dummyjson.com/products` при монтировании компонента. Товары стоит хранить в стейте компонента.
*/

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect( () => {
    fetch(`https://dummyjson.com/products`)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        else {
          throw Error('Something went wrong!');
        }
      })
      .then( data => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div className="productListContainer">
      {
        products && products.map( product => {
          return <ProductCard key={product.id} product={product}/>
        })
      }
    </div>
  )
}