import React from "react";
import FooterStyled from "../styles/FooterStyled";
import retroPcs from "../images/image-retro-pcs.jpg";
import gamingGrowth from "../images/image-gaming-growth.jpg";
import topLaptops from "../images/image-top-laptops.jpg";
const Footer = () => {
  return (
    <FooterStyled>
      <div className="card">
        <div className="img-container">
          <img src={retroPcs} alt="retro-pcs" />
        </div>
        <div className="text">
          <h1>01</h1>
          <h2>Reviving Retro PCs</h2>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="card">
        <div className="img-container">
          <img src={topLaptops} alt="retro-pcs" />
        </div>
        <div className="text">
          <h1>02</h1>
          <h2>Top 10 Laptops of 2022</h2>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="card">
        <div className="img-container">
          <img src={gamingGrowth} alt="retro-pcs" />
        </div>
        <div className="text">
          <h1>03</h1>
          <h2>The Growth of Gaming</h2>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
