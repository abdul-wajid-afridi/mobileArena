import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../styles/ProductCarasoul.css";
import axios from "axios";

const ImageSlider = ({ header, subHeader }) => {
  const [AllProducts, setAllProducts] = useState([]);
  const settings = {
    fade: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: "linear",
    slidesToShow: 1,
    swipe: true,
    fade: true,
    swipeToSlide: true,
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
                <div className="w-screen h-[450px]" key={prod.id}>
                  <img src={prod.image} className="h-full w-full" alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default ImageSlider;
