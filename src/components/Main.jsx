import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import web3Desktop from "../images/image-web-3-desktop.jpg";
import web3Mobile from "../images/image-web-3-mobile.jpg";
import MainStyled from "../styles/MainStyled";
import NewCardStyled from "../styles/NewCardStyled";

const Main = () => {
  const [width] = useWindowSize();
  console.log(width);
  return (
    <MainStyled>
      <div className="left">
        <img src={width > 900 ? web3Desktop : web3Mobile} alt="web 3.0" />
        <div className="content">
          <h1 className="title">The Bright Future of Web 3.0?</h1>
          <div className="content-text">
            <p className="text">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="btn-primary">Read more</button>
          </div>
        </div>
      </div>
      <div className="right">
        <h2 className="title">New</h2>
        <NewCardStyled>
          <h3 className="title">Hydrogen VS Electric Cars</h3>
          <p className="text">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </NewCardStyled>
        <NewCardStyled>
          <h3 className="title">The Downsides of AI Artistry</h3>
          <p className="text">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>{" "}
        </NewCardStyled>
        <NewCardStyled>
          <h3 className="title">Is VC Funding Drying Up?</h3>
          <p className="text">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </NewCardStyled>
      </div>
    </MainStyled>
  );
};

export default Main;
