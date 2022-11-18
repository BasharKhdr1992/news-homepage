import React from "react";
import SidebarStyled from "../styles/SidebarStyled";
import iconClose from "../images/icon-menu-close.svg";
const Sidebar = ({ sidebar, close }) => {
  return (
    <SidebarStyled sidebar={sidebar}>
      <div className={`sidebar ${sidebar ? "active" : undefined}`}>
        <div className="header">
          <img src={iconClose} alt="icon menu close" onClick={close} />
        </div>
        <div className="links">
          <button className="link">Home</button>
          <button className="link">New</button>
          <button className="link">Popular</button>
          <button className="link">Trending</button>
          <button className="link">Categories</button>
        </div>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
