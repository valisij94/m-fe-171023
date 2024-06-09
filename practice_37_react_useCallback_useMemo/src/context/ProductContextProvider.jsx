import React, { useState } from "react";
import { ProductContext } from "./ProductContext";

export default function ProductContextProvider( {children} ) {

  const [products, setProducts] = useState([]);

  const addProduct = (productData) => {
    setProducts( prev => ( [...prev, productData] ) );
  }

  return (
    <ProductContext.Provider value={ {
      products,
      addProduct
    } }>
      {children}
    </ProductContext.Provider>
  )
}