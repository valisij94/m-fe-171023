/*
1. Реализуем компонент "Карточка товара", назовем его `ProductCard`. Карточка должна содержать картинку товара, название, категорию, описание и цену. В пропсах компонент будет принимать объект с данными о товаре.
*/

import React from "react";

export default function ProductCard( {product} ) {

  return (
    <div className="productCardContainer">
      <img className="productCardImg" src={product.thumbnail} alt="Product img"/>
      <h2>{product.title}</h2>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}