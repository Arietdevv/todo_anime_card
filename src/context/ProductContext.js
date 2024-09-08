import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../helpers/const";

const productContext = createContext();
export const useProductContext = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [getData, setGetData] = useState(null);

  async function createProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  async function getProduct(id) {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      setGetData(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  async function readProduct() {
    try {
      const res = await axios.get(API);
      setData(res.data);
    } catch (error) {
      console.error("Error reading products:", error);
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      readProduct();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  const values = {
    createProduct,
    readProduct,
    data,
    deleteProduct,
    getProduct,
    getData,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
