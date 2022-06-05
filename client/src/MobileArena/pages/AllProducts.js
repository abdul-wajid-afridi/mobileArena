import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaTrash, FaHeart } from "react-icons/fa";

import "../styles/AllProducts.css";
import AppCard from "../components/AppCard";
import Gallary from "../components/Gallary";

const AllProducts = () => {
  const [hearted, setPostHeart] = useState(0);
  const [CountId, setCountId] = useState();
  const [AllProducts, setAllProducts] = useState([]);
  const [Search, setSearch] = useState("");

  // console.log(CountId + "this is the count id");
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setAllProducts(res.data);
    });
  }, []);
  return (
    <>
      <p className="products__header">
        all of our <span>products</span>
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
          />{" "}
        </div>
      </div>
      <Gallary>
        {AllProducts.filter((pr) => {
          if (Search === "") return pr;
          else if (pr.name.toLowerCase().includes(Search.toLowerCase())) {
            return pr;
          }
        }).map((prod) => {
          return (
            <AppCard
              prod={prod}
              key={prod.id}
              image={prod.image}
              name={prod.name}
              price={prod.price}
              memory={prod.memory}
              link={prod.link}
              state={prod}
              // onClick={() => heartHandler(prod.id)}
              // count={hearted}
            />
          );
        })}
      </Gallary>
    </>
  );
};

export default AllProducts;
