// import React from "react";

// import request from "../../../libs/request";

// const ManageProducts = () => {
//   React.useEffect(() => {
//     request
//       .get("/dashboard")

//       .then((re) => {
//         console.log(re);
//       })
//       .catch((e) => {});
//   }, []);

//   return (
//     <div>
//       <p className="">ManageProducts</p>
//     </div>
//   );
// };

// export default ManageProducts;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPen, FaSearch, FaTrash } from "react-icons/fa";

import request from "../../../libs/request";

const ManageProducts = () => {
  const [AllProducts, setAllProducts] = useState([]);
  const [Search, setSearch] = useState("");

  const handleDelete = (id) => {
    axios.delete(`/api/products/delete/${id}`).then((err) => {
      console.log(err);
    });
  };

  const handleUpdate = (id) => {
    console.log("data updated");
  };

  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setAllProducts(res.data);
    });
    request
      .get("/dashboard")

      .then((re) => {
        console.log(re);
      })
      .catch((e) => {});
  }, []);
  return (
    <>
      <p className="products__header">
        Manage <span>products</span>
      </p>
      <div className="products__search">
        <div>
          <span>
            <FaSearch />
          </span>
          <input
            type="text"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search"
          />
        </div>
      </div>
      <section className="flex flex-col bg-gray-100 px-10 py-20 shadow-md">
        {AllProducts.filter((pr) => {
          if (Search === "") return pr;
          else if (pr.name.toLowerCase().includes(Search.toLowerCase())) {
            return pr;
          }
        }).map((prod) => {
          return (
            <div
              key={prod.id}
              className="flex justify-between  mx-5  gap-5 py-5 px-10 border"
            >
              <img src={prod.image} className="h-20 w-20" alt="" />
              <p>{prod.name}</p>
              <p>{prod.price}pkr</p>
              <p>{prod.memory}</p>
              <p>{prod.company}</p>

              <button
                onClick={(e) => handleDelete(prod.id)}
                className="bg-sky-500 hover:bg-sky-700 p-5 rounded-md text-2xl text-red-600 "
              >
                <FaTrash />
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ManageProducts;
