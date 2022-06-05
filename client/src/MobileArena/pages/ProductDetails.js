import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";

const ProductDetails = () => {
  const { state } = useLocation();
  const [Comments_state, setComments] = useState([]);
  const [comment_text, setPostComments] = useState("");
  const postComments = (e) => {
    e.preventDefault();
    axios
      .post("/post/comments/" + state.id, {
        comment_text,
      })
      .then((res) => {
        return res
          ? setComments([...Comments_state, { comment_text }])
          : console.log(res);
      });
    setPostComments("");
  };

  const getComments = async () => {
    const comment = await axios.post("/comments/" + state.id);
    const newData = await comment.data;
    setComments(newData.data);
  };
  useEffect(() => {
    getComments();
  }, []);
  return (
    <section className="flex flex-wrap justify-between items-center">
      <div className="flex flex-col justify-center items-center my-20 gap-5 sm:w-[70%] w-full ">
        <img
          src={state.image}
          className="h-[300px] w-[90%] sm:w-[50%] shadow-lg shadow-blue-800"
          alt=""
        />
        <p>{state.name}</p>
        <p>{state.description}</p>
        <p>{state.company}</p>
        <p>Price :{state.price}</p>
        <p>{state.memory} Gb</p>
      </div>
      <div className="sm:w-[20%] w-full flex flex-col gap-10">
        <form className="flex flex-col gap-5" onSubmit={postComments}>
          <input
            className="border outline-none rounded-xl py-2 mx-20 pl-2 sm:mx-0 hover:bg-gray-200"
            type="text"
            placeholder="Write Comment"
            value={comment_text}
            onChange={(e) => setPostComments(e.target.value)}
          />
          <button
            className="border outline-none rounded-xl py-2 font-bold text-white bg-gradient-to-r from-blue-700 to-cyan-500   hover:from-blue-500 hover:to-cyan-800  mx-24 sm:mx-0"
            onClick={postComments}
          >
            Comment
          </button>
        </form>
        {Comments_state.map((coment) => {
          {
            return (
              <div>
                <p className="bg-gray-100 py-4 px-3 hover:bg-gray-200">
                  {coment.comment_text}
                </p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default ProductDetails;
