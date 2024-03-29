import React, { useState, useEffect } from "react";
import "./Landing.css";
import LandingImage from "../assets/landing-image.png";

const Landing = () => {
  const [typedText, setTypedText] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [typedText3, setTypedText3] = useState("");

  const textsToType = ["Dream.", "Define.", "Establish."];

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (textsToType[textIndex].length === charIndex && textIndex === 2) {
        clearInterval(typingInterval);
      } else if (charIndex === textsToType[textIndex].length) {
        charIndex = 0;
        textIndex++;
      } else if (textIndex === 2) {
        charIndex++;
        setTypedText3(textsToType[2].slice(0, charIndex));
      } else if (textIndex === 1) {
        charIndex++;
        setTypedText2(textsToType[1].slice(0, charIndex));
      } else {
        charIndex++;
        setTypedText(textsToType[0].slice(0, charIndex));
      }
    }, 200); // Adjust the typing speed by changing the interval

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="main22-landing">
        {/* maindevelop cantioner start */}
        <div className="maindevelop-landing">
          {/* leftdevelop cantioner start */}
          <div className="leftdevelop-landing">
            <div className="subleftdevelop1-landing">
              <h1>
                {typedText}
                <br /> {typedText2}
                <br /> <span className="servicesdevelop-landing">{typedText3}</span>
              </h1>
            </div>
            <div className="landing-text-main">
              <div className="landing-text-para">
                We are a core tech company passionate about the research
                <br /> and development of technology solutions that transform
                businesses and <br />
                people’s work styles.
              </div>

              <div className="landing-text-para">
                We are a core tech company passionate about the research
                <br /> and development of technology solutions that transform
                businesses and <br />
                people’s work styles.
              </div>

              <div>
                <button className="landing-btn ">Connect With Us</button>
              </div>
            </div>
          </div>
          {/* leftdevelop cantioner end */}

          {/* RightDevelop cantioner start */}
          <div className="RightDevelop-landing animated-image">
            <img src={LandingImage} alt="Landing-Image"/>
          </div>
          {/*RightDevelop cantioner end */}
        </div>
        {/* maindevelop cantioner end */}
      </div>
      <br />
    </>
  );
};

export default Landing;
