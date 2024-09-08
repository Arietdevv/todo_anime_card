import React, { useState, useEffect } from "react";
import { useProductContext } from "../context/ProductContext";
import CardProduct from "./CardProduct";
import { Link, useNavigate, useParams } from "react-router-dom";

const ListProduct = () => {
  const { readProduct, data } = useProductContext();
  const [search, setSearch] = useState("");
  const id = useParams();

  useEffect(() => {
    readProduct();
  }, []);

  const filteredData = data
    ? data.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <div id="list">
      <div className="container">
        <h1>Anime Girls</h1>

        <div className="list_in">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              marginBottom: "40px",
              padding: "10px",
              width: "100%",
              maxWidth: "300px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* <Link to="/about"> */}
        <div className="list">
          {filteredData.length > 0 ? (
            filteredData.map((el, idx) => <CardProduct el={el} key={el.id} />)
          ) : (
            <h1>No products found</h1>
          )}
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ListProduct;
