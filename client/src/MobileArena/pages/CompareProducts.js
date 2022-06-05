import axios from "axios";
import React, { useEffect, useState } from "react";
import AppCard from "../components/AppCard";

const CompareProducts = () => {
  const [data, setdata] = useState({});
  const [filt, setfilt] = useState({});

  const [LeftS, setLeftS] = useState("");
  const [RightS, setRightS] = useState("");

  const [Data, setData] = useState([
    {
      name: "loading",
    },
  ]);

  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleRight = () => {
    setdata(
      Data.find((it) => {
        if (RightS == "") return null;
        else if (
          it.name.toLowerCase().includes(RightS.toLowerCase()) &&
          it.id !== filt.id
        ) {
          return it;
        }
      })
    );
  };
  const handleLeft = () => {
    setfilt(
      Data.find((it) => {
        if (LeftS === "") return null;
        else if (
          it.name.toLowerCase().includes(LeftS.toLowerCase()) &&
          it.id !== data.id
        ) {
          return it;
        }
      })
    );
  };

  return (
    <div className="flex flex-wrap justify-center gap-32 lg:gap-0 h-auto lg:h-[62vh]">
      <div className="w-[500px] ">
        <input
          type="text"
          placeholder=" search"
          value={LeftS}
          className="bg-white rounded-full h-12 pl-2 m-2 outline-none border-2 border-blue-700"
          onChange={(e) => setLeftS(e.target.value)}
        />
        <button
          className="h-8 w-32 bg-blue-500 rounded-xl text-sm text-white  tracking-wide font-bold"
          onClick={handleLeft}
        >
          compare with
        </button>

        {filt && filt.name ? (
          <div key={filt.id} className="w-full">
            {/* <AppCard
              image={filt.image}
              name={filt.name}
              memory={filt.memory}
              price={filt.price}
            /> */}
            <div className="flex flex-col justify-center">
              <p>{filt.name}</p>
              <img src={filt.image} alt="" className="h-60 w-60 rounded-md" />
              <p>{filt.memory}</p>
              <p>{filt.price} pkr</p>
              <p>{filt.company}</p>
              <a
                className="border py-1 hover:bg-gray-200 text-center w-32"
                href={filt.link}
                target="_blank"
              >
                shop Now
              </a>
            </div>
          </div>
        ) : (
          <p> Enter valid data</p>
        )}
      </div>
      <div className="w-[500px] pl-5 lg:border-l-2 lg:border-black">
        <input
          type="text"
          placeholder=" search"
          className="bg-white rounded-full h-12 pl-2 m-2 outline-none border-2 border-blue-700"
          value={RightS}
          onChange={(e) => setRightS(e.target.value)}
        />
        <button
          className="h-8 w-32 bg-blue-500 rounded-xl text-sm text-white  tracking-wide font-bold"
          onClick={handleRight}
        >
          compare with
        </button>

        {data && data.name ? (
          <div key={data.id} className="w-full">
            {/* <AppCard
              image={data.image}
              name={data.name}
              memory={data.memory}
              price={data.price}
            /> */}
            <div>
              <p>{data.name}</p>
              <img src={data.image} alt="" className="h-60 w-60 rounded-md" />
              <p>{data.memory}</p>
              <p>{data.price} pkr</p>
              <p>{data.company}</p>
              <a
                className="border py-1 px-3 hover:bg-gray-200 text-center w-32"
                href={data.link}
                target="_blank"
              >
                shop Now
              </a>
            </div>
          </div>
        ) : (
          <p> Enter valid data</p>
        )}
      </div>
    </div>
  );
};

export default CompareProducts;
