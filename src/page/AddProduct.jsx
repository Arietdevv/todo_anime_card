import React, { useState } from "react";
import { useProductContext } from "../context/ProductContext";

const AddProduct = () => {
  const { createProduct, readProduct } = useProductContext();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function addProduct() {
    let newObj = {
      name: name,
      image: image,
    };
    setName("");
    setImage("");

    createProduct(newObj);
    readProduct();
  }

  return (
    <div id="add">
      <div className="container">
        <div className="add">
          <h1>Create Card</h1>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          <button onClick={addProduct}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
