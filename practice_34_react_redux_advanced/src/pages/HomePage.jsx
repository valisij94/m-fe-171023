import React from "react";
import { useSelector } from "react-redux";

export default function HomePage() {

  const counter = useSelector( state => state.counter.count );

  return (
    <>
      <h2>HomePage (hello there!)</h2>
    </>
  )
};