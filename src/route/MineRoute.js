import React from "react";
import AddProduct from "../page/AddProduct";
import ListProduct from "../page/ListProduct";
import { Route, Routes } from "react-router-dom";
import About from "../page/About";

const MineRoute = () => {
  const PRODUCT = [
    {
      link: "/add",
      element: <AddProduct />,
      id: 2,
    },
    {
      link: "/list",
      element: <ListProduct />,
      id: 3,
    },
    {
      link: "/about/:id",
      element: <About />,
      id: 4,
    },
  ];

  return (
    <Routes>
      {PRODUCT.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MineRoute;
