import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import images from "../../constants/images";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logonew} alt="app-logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">Brands</a>
        </li>{" "}
        <li className="p__opensans">
          <a href="#vapes">Jucies</a>
        </li>{" "}
        <li className="p__opensans">
          <a href="#contact">pods & Tanks</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Coils & Parts</a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />

            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">Brands</a>
              </li>{" "}
              <li className="p__opensans">
                <a href="#vapes">Jucies</a>
              </li>{" "}
              <li className="p__opensans">
                <a href="#contact">pods & Tanks</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Coils & Parts</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
