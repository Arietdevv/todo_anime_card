import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../helpers/const";

const productContext = createContext();
export const useProductContext = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const [data, setData] = useState([]);

  async function createProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  async function readProduct() {
    let res = await axios(API);
    setData(res.data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }

  const values = {
    createProduct,
    readProduct,
    data,
    deleteProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
