import React, { useState } from "react";
import NavbarStyled from "../styles/NavbarStyled";
import logo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import { useWindowSize } from "../hooks/useWindowSize";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const [width] = useWindowSize();
  const [sidebar, setSidebar] = useState(false);
  const openSidebar = () => {
    setSidebar(true);
  };
  return (
    <NavbarStyled>
      <img src={logo} alt="news home page logo" />
      <div className="right">
        <button className="link">Home</button>
        <button className="link">New</button>
        <button className="link">Popular</button>
        <button className="link">Trending</button>
        <button className="link">Categories</button>
      </div>
      <div className="mobile">
        <img
          className="mobile"
          onClick={openSidebar}
          src={iconMenu}
          alt="hamburger menu"
        />
      </div>
      <Sidebar
        sidebar={sidebar && width <= 900}
        close={() => setSidebar(false)}
      />
    </NavbarStyled>
  );
};

export default Navbar;
