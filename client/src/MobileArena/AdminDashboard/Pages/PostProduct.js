import React, { useState } from "react";
import axios from "axios";

import "../styles/PostProduct.css";

const PostProduct = () => {
  const [File, setFile] = useState();
  const [name, setname] = useState();
  const [company, setCompany] = useState();
  const [link, setLink] = useState();
  const [memory, setMemory] = useState();
  const [price, setPrice] = useState();
  const [color, setColor] = useState();
  const [description, setDescription] = useState();
  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile", File);
    formData.append("name", name);
    formData.append("company", company);
    formData.append("link", link);
    formData.append("memory", memory);
    formData.append("price", price);
    formData.append("color", color);
    formData.append("description", description);

    axios
      .post("/api/products", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        const { fileName, filePath } = res.data;
        // setallData({ filePath, fileName });
        // setShowData(res.data);
        return res.data;
      });

    setFile("");
    setname("");
    setCompany("");
    setLink("");
    setMemory("");
    setPrice("");
    setColor("");
    setDescription("");
  };

  return (
    <section className="postproducts__container">
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ram/Rom With GB"
          value={memory}
          onChange={(e) => setMemory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default PostProduct;
