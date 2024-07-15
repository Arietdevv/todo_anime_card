import React, { useEffect } from "react";
import { useProductContext } from "../context/ProductContext";
import CardProduct from "./CardProduct";

const ListProduct = () => {
  const { readProduct, data } = useProductContext();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div id="list">
      <div className="container">
        <h1>Anime Girls</h1>
        <div className="list">
          {data ? (
            data.map((el, idx) => <CardProduct el={el} key={idx} />)
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
