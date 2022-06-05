import axios from "axios";
import React, { useState } from "react";
import "../styles/contactus.css";
import contact from "../images/contact.jpg";
import AppButton from "../components/AppButton";
import { inputData } from "../Config/SizeColors";
import AppInputs from "../components/AppInputs";

import { FaUser, FaEnvelope, FaFacebookMessenger } from "react-icons/fa";
const url = "/api/reviews";
const ContactUs = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [description, setdescription] = useState();

  const postReview = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        name,
        email,
        description,
      })
      .then((err) => {
        err ? console.log(err) : console.log("data posted succesfully");
      });
    setname("");
    setemail("");
    setdescription("");
  };

  return (
    <div className="contact__container">
      <div className="contact__img">
        <span className="contact__img__color"></span>
        <img src={contact} alt="contact image" />
      </div>
      <p className="contact__header">
        lets Start Our <span>Conversation</span>
      </p>
      <form className="contact__form">
        <AppInputs
          bgHover="hover:bg-gray-200"
          size={"w-full py-1"}
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          icon={<FaUser />}
        />
        <AppInputs
          bgHover="hover:bg-gray-200"
          placeholder="email"
          size={"w-full py-1"}
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          icon={<FaEnvelope />}
        />
        <AppInputs
          size={"w-full h-20"}
          bgHover="hover:bg-gray-200"
          placeholder="description"
          type="text"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          icon={<FaFacebookMessenger />}
        />
        <AppButton
          className=""
          bgColor={inputData.blue}
          color={"text-white hover:bg-fuchsia-600"}
          size={inputData.larg}
          name={"submit"}
          onClick={postReview}
        />
      </form>
    </div>
  );
};

export default ContactUs;
