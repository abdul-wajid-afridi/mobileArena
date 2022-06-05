import React from "react";

import { FaMobileAlt, FaSdCard } from "react-icons/fa";
import Tilty from "react-tilty";
import "../styles/CarasoulCard.css";

const data = {
  max: 2,
  reverse: false, // reverse the tilt direction
  glare: true,
  "max-glare": 2,
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
const CarasoulCard = ({ img, name, company, price, memory, color, link }) => {
  return (
    <Tilty {...data}>
      <div className="features__container">
        <img src={img} alt={name} />

        <p className="text-gray-500 font-bold m-2">{name}</p>
        <div className="feature__main">
          <div className="feature__left">
            <span>
              <FaMobileAlt />
              <p>{company} </p>
            </span>
            <span>
              <FaSdCard />
              <p> {memory}</p>
            </span>
            <span>
              <p>color</p>
              <span
                style={{
                  background: color,
                  height: 20,
                  width: 40,
                  borderRadius: 20,
                  border: "1px solid gray",
                }}
              ></span>
            </span>
          </div>
          <div className="feature__right">
            <p>Price : {price}pkr</p>
          </div>
        </div>
      </div>
    </Tilty>
  );
};

export default CarasoulCard;
