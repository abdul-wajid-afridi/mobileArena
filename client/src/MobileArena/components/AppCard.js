import React, { useEffect, useState } from "react";
import "../styles/AppCard.css";
import { FaHeart } from "react-icons/fa";

import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
// import Tilt from "react-tilt";
import Tilty from "react-tilty";
import axios from "axios";
const AppCard = ({
  prod,
  name,
  price,
  image,
  memory,
  link,
  state,
  onClick,
  count,
}) => {
  const [Count, setCount] = useState(0);
  const [HeartCount, setHeartCount] = useState([]);

  const heartHandler = (id) => {
    axios
      .post("/post/heart/" + prod.id, {
        hearted: Count,
      })
      .then((res) => {
        return res
          ? // ? setComments([...Comments_state, { comment_text }])
            console.log("posted")
          : console.log(res);
      });
    setCount(Count + 1);
  };
  const getHeart = async (id) => {
    const comment = await axios.post("/heart/" + prod.id);
    const newData = await comment.data;
    console.log(newData.data);
    setHeartCount(newData.data);
    // setComments(newData.data);
  };
  console.log("length is : " + HeartCount.length);
  const val = HeartCount.slice((it) => it.hearted.length - 1);
  // HeartCount.length - 1, HeartCount.length
  // console.log(val.map((it) =>));
  useEffect(() => {
    getHeart();
  }, [HeartCount.length]);
  const data = {
    reverse: false, // reverse the tilt direction
    max: 55, //it gives the rotation and moving of the card... max tilt rotation (degrees)
    // perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    // scale: 0.8, // 2 = 200%, 1.5 = 150%, etc..
    // speed: 300, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    // axis: true, // What axis should be disabled. Can be X or Y.
    // reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    glare: true,
    "max-glare": 2,
  };

  return (
    <div className="border-r hover:shadow-lg relative">
      <Link to="/detail" state={state}>
        <Tilty
          // style={{ transformStyle: "preserve-3d" }}
          // Options={data}
          {...data}
        >
          <div className="app__card">
            <div className="card__top">
              <p>{name}</p>
              <p>{memory}GB</p>
            </div>
            <img src={image} alt={name} />

            <p className="card__price">Price : {price}pkr</p>
          </div>
        </Tilty>
      </Link>
      <a className="card__link" href={link} target="_blank">
        Shop Now
      </a>
      <div className="absolute bottom-0 right-0" onClick={heartHandler}>
        <FaHeart className=" text-4xl text-red-600 active:transform transition-all ease-in active:-translate-y-10 active:opacity-0" />
        <span>{HeartCount.length}</span>
        {/* {Count} */}
      </div>
    </div>
  );
};
export default AppCard;
