import React, { useEffect } from "react";
import { useProductContext } from "../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const CardProduct = ({ el }) => {
  const { readProduct, data, deleteProduct } = useProductContext();
  const id = useParams();

  const navigate = useNavigate();
  return (
    <div id="card">
      <div className="container">
        <div className="card">
          <img src={el.image} alt="img" />
          <div className="card_txt">
            <h2>{el.name}</h2>
            <button onClick={() => navigate(`/about/${el._id}`)}>read</button>
            <button onClick={() => deleteProduct(el._id)}>delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
