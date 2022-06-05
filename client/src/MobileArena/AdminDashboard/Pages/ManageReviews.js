import React, { useEffect, useState } from "react";
import axios from "axios";

import { FaTrash } from "react-icons/fa";

const ManageReviews = () => {
  const [AllReviews, setAllReviews] = useState([]);
  const url = "/api/reviews";
  const getReviews = async () => {
    const req = await axios.get(url);
    const res = await req.data;
    setAllReviews(res);
  };
  // handleDelete
  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`/api/reviews/delete/${id}`).then((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    getReviews();
  }, []);
  return (
    <div className="flex flex-col bg-gray-100 px-10 py-20 shadow-md">
      {AllReviews.map((rev) => {
        return (
          <div
            className="flex justify-between  mx-5  gap-5 py-5 px-10 border"
            key={rev.id}
          >
            <p>{rev.name}</p>
            <p>{rev.email}</p>
            <p>{rev.description}</p>
            <button
              className="bg-sky-500 hover:bg-sky-700 p-5 rounded-md text-2xl text-red-600 "
              onClick={(e) => handleDelete(rev.id)}
            >
              <FaTrash />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ManageReviews;
