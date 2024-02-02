import React from "react";
import LoginIn from "../assets/login-icon.png";

const Resolute = () => {
  return (
    <div className="resolute">
      <div className="maindevelop">
        <div className="leftdevelop">
          <span className="Resolute-Interchain-Interface">
            <span className="text-style-1">
              Resolute<br></br>
            </span>
            Interchain Interface
          </span>

          <div className="text-frame">
            <p>
              We are a core tech company passionate about the research and
              development of techn`ology solutions that transform
              businesses.chnology solutions that transaction. We are a core tech
              company passionate about the research and development of
              technology solutions that transform businesses.chnology solutions
              that transaction.
            </p>
            <p>
              We are a core tech company passionate about the research and
              development of technology solutions that transform
              businesses.chnology solutions that transaction.
            </p>
            <p>
              {" "}
              We are a core tech company passionate about the research and
              development of technology solutions that transform
              businesses.chnology solutions that transaction.
            </p>
          </div>

          <div className="">
            <button className="resolute-btn cursor-pointer">
              Connect to resolute
              <img src={LoginIn} alt="Connect resolute" />
            </button>
          </div>
        </div>
        <div className="RightDevelop"></div>
      </div>
    </div>
  );
};

export default Resolute;
