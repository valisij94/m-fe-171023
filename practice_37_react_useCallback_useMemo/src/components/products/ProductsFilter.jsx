
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyCategoryFilterAction } from '../../store/actions/filterActions.js';

export default function ProductFilter() {

  const dispatch = useDispatch();

  const products = useSelector( state => state.products.products );
  const categorySelected = useSelector( state => state.filter.category );

  const categories = products.reduce( (acc, val) => {
    if (!acc.includes(val.category)) {
      acc.push(val.category);
    }
    return acc;
  }, [ "all" ]);

  return (
    <div className="productsFilter">
      <select
        onChange={ (e) => {
          dispatch( applyCategoryFilterAction(e.target.value) );
        }}
        value={categorySelected || "all" }
      >
        {
          categories && categories.map( category => {
            return <option key={category} value={category}>{category}</option>;
          })
        }
      </select>
    </div>
  )
}