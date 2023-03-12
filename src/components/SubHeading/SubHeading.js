import React from "react";
import "./SubHeading.css";
import { images } from "../../constants";
const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <div className="vape__img"></div>
    </div>
  );
};

export default SubHeading;
