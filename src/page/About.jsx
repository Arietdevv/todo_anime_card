import React, { useEffect } from "react";
import { useProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const About = () => {
  const { getProduct, getData } = useProductContext();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id, getProduct]);

  console.log("Loaded product data:", getData);

  if (!getData) {
    return <h1>Loading...</h1>;
  }

  return (
    <section id="about">
      <img className="image1" src={getData.backround} alt="image" />
      <div className="container">
        <div className="about">
          <div className="about_txt">
            <h1>{getData.name}</h1>
            <p>{getData.descr}</p>
          </div>
          <img src={getData.image} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default About;
