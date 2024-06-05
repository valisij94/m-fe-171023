import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ProductContext } from "../context/ProductContext";

export default function HomePage() {

  const counter = useSelector( state => state.counter.count );

  const productContext = useContext(ProductContext);
  console.log(productContext);

  return (
    <>
      <h2>HomePage (hello there!)</h2>
      {
        productContext.products.map( product => (<p key={product.name}>{product.name}</p>))
      }
    </>
  )
};