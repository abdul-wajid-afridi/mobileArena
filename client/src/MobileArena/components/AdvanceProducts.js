import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../styles/ProductCarasoul.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import CarasoulCard from "./CarasoulCard";
import axios from "axios";

const AdvanceProducts = ({ header, subHeader }) => {
  const [AllProducts, setAllProducts] = useState([]);
  //   const settings = {
  //     // fade: true,
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     swipe: true,
  //     fade: true,
  //   };
  var settings = {
    // autoplay: true,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    // dots: true,
    // infinite: false,
    // // speed: 500,
    // speed: 2000,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // initialSlide: 0,

    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    // cssEase: "linear",
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
            {AllProducts.filter((pr) => pr.price > 50000).map((prod) => {
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
export default AdvanceProducts;
