import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="aboutus app__bg flex__center section__padding" id="about">
    <div className="aboutus-overlay flex__center"></div>
    <div className="aboutus-content flex__center">
      <div className="aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <div className="vape__img" />{" "}
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="aboutus-content_vape flex__center">
        <img
          src={images.vape5}
          style={{
            width: "400px",
            height: "250px",
          }}
          alt="about_knife"
        />
      </div>

      <div className="aboutus-content_shops">
        <h1 className="headtext__cormorant">Our Shops</h1>
        <div className="vape__img" />{" "}
        <p className="p__opensans">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
