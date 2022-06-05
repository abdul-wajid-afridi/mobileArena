import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../styles/ProductCarasoul.css";
import CarasoulCard from "./CarasoulCard";
import axios from "axios";

const ProductCarasoul = ({ header, subHeader }) => {
  const [AllProducts, setAllProducts] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setAllProducts(res.data);
    });
  }, []);
  return (
    <>
      <div>
        <p className="carasoul__header">
          {header}
          <span>{subHeader}</span>
        </p>
        <div className="carasoul__gallary">
          <Slider {...settings}>
            {AllProducts.slice(0, 5).map((prod) => {
              return (
                <CarasoulCard
                  key={prod.id}
                  img={prod.image}
                  link={prod.link}
                  memory={prod.memory}
                  name={prod.name}
                  price={prod.price}
                  color={prod.color}
                  company={prod.company}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default ProductCarasoul;
