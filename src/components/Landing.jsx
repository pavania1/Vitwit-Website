import React from "react";
import "./Landing.css";
import LandingImage from "../assets/landing-image.png";

const Landing = () => {
  return (
    <>
      <div className="main22-landing">
        {/* maindevelop cantioner start */}
        <div className="maindevelop-landing">
          {/* leftdevelop cantioner start */}
          <div className="leftdevelop-landing">
            <div className="subleftdevelop1-landing">
              <h1>
                Dream.<br></br> Define.<br></br>
                <span className="servicesdevelop-landing">Establish.</span>
              </h1>
            </div>
            <div className="landing-text-main">
              <div className="landing-text-para">
                We are a core tech company passionate about the research
                <br></br> and development of technology solutions that transform
                businesses and <br></br>people’s work styles.
              </div>

              <div className="landing-text-para">
                We are a core tech company passionate about the research
                <br></br> and development of technology solutions that transform
                businesses and <br></br>people’s work styles.
              </div>

              <div>
                <button className="landing-btn ">Connect With Us</button>
              </div>
            </div>
          </div>
          {/* leftdevelop cantioner end */}

          {/* RightDevelop cantioner start */}
          <div className="RightDevelop-landing">
            <img src={LandingImage} alt="Landing-Image" />
          </div>
          {/*RightDevelop cantioner end */}
        </div>
        {/* maindevelop cantioner end */}
      </div>
      <br></br>
    </>
  );
};

export default Landing;
