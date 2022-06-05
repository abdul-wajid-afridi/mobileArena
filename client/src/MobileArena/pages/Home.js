import React from "react";
import AdvanceProducts from "../components/AdvanceProducts";
import AppCard from "../components/AppCard";
import HomeCard from "../components/HomeCard";
import ImageSlider from "../components/ImageSlider";
import MainPage from "../components/MainPage";
import ProductCarasoul from "../components/ProductsCarasoul";

import { developer } from "../Config/AboutDeveloper";

const Home = () => {
  return (
    <div>
      <MainPage />
      <ProductCarasoul header={"Latest "} subHeader={"Products"} />
      <ImageSlider />
      <AdvanceProducts header={"Advance "} subHeader="Products" />

      <p className=" text-center text-gray-600 my-20 font-bold tracking-wider text-xl sm:text-5xl">
        Management & Administration
      </p>
      <section className="flex flex-wrap justify-center items-start my-10 gap-20">
        {developer.map((it) => {
          return (
            <HomeCard
              key={it.id}
              image={it.img}
              name={it.name}
              role={it.role}
              education={it.qualify}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Home;
