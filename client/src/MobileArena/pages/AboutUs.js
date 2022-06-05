import React from "react";
import { developer } from "../Config/AboutDeveloper";
import avatar from "../images/stay-home.png";
import "../styles/AboutUs.css";
import { FaUser, FaPen, FaLaptop } from "react-icons/fa";
const AboutUs = () => {
  return (
    <section className="about__container">
      <div className="about__top">
        <div className="about__text">
          <p>
            Who We <span>Are</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat
            iusto cumque autem culpa accusamus sed dicta atque possimus
            voluptatum reiciendis dolorum beatae hic nesciunt rem, blanditiis
            magni veniam. Quibusdam quas asperiores rem praesentium cupiditate
            animi impedit ad sit officiis.
          </p>
        </div>
        <div className="about__img">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <p className="about__header">
        Our Qualified And <span>Skillfull Team</span>
      </p>
      <div className="about__developer">
        {developer.map((dev) => {
          return (
            <div key={dev.id} className="developer__card">
              <img src={dev.img} alt={dev.name} />

              <div className="developer__data">
                <p className="text-lg text-gray-800">{dev.name}</p>
                <p>{dev.role}</p>
                <p>{dev.qualify}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutUs;
