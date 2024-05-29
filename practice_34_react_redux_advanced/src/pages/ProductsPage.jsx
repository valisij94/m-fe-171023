import React from "react";
import ProductList from "../components/products/ProductList";
import ProductFilter from "../components/products/ProductsFilter";

export default function ProductsPage() {

  return (
    <>
      <h2>All Products List page</h2>
      <ProductFilter />
      <ProductList />
    </>
  )
};