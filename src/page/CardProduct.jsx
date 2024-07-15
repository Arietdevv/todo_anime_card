import React, { useEffect } from "react";
import { useProductContext } from "../context/ProductContext";

const CardProduct = ({ el }) => {
  const { deleteProduct } = useProductContext();
  console.log(el);
  return (
    <div id="card">
      <div className="container">
        <div className="card">
          <img src={el.image} alt="img" />
          <div className="card_txt">
            <h2>{el.name}</h2>
            <button onClick={() => deleteProduct(el._id)}>delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
