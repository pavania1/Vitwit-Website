import React from "react";
import "./Delegate.css";
import Akash from "../assets/partners/akash.svg";
import Regen from "../assets/partners/regen.svg";
import Polygen from "../assets/partners/passage.svg";
import Cosmos from "../assets/partners/cosmos.svg";
import { Alert, Space } from "antd";
import Person from "../assets/person.svg";
import Twitter from "../assets/social-icons/twitter.png";
import Favorite from "../assets/favorite.svg";
const Delegate = () => {
  return (
    <>
      <div className="main22">
        <div>
          <div className="subleftdevelop1-delegate">
            <h1>
              Our &nbsp;
              <span className="servicesdevelop">Partners</span>
            </h1>
          </div>
          <div className="delegate-text">
            We are a core tech company passionate about the research and
            development of technology solutions that transform businesses and
            people’s work <br></br>styles.We are a core tech company passionate
            about the research and development of technology solutions that
            transform.
          </div>

          <div className="">
            <div className="partners-logo-1">
              <img src={Akash} alt="Akash" />
              <img src={Regen} alt="Regen" />
              <img src={Polygen} alt="Polygen" />
              <img src={Cosmos} alt="Cosmos" />
            </div>
            <div className="partners-logo-1">
              <img src={Akash} alt="Akash" />
              <img src={Regen} alt="Regen" />
              <img src={Polygen} alt="Polygen" />
            </div>
          </div>
        </div>
        <div>
          <div className="bottom-text">
            Don’t just take our word for it ! Here’s what people say about
            Vitwit
          </div>
          <div>
            <Space
              className="space-alert-dev"
              direction=""
              style={{
                width: "100%",
              }}
            >
              <Alert
                className="alert2001"
                message={
                  <div className="flex justify-between">
                    <div className="flex space-x-2">
                      <img src={Person} alt="Person Image" />
                      <div className="">
                        <div className="Jack-Zampolin ">Jack-Zampolin </div>
                        <span style={{ color: "white", fontWeight: "500" }}>
                          @Jackk_1234
                        </span>
                      </div>
                    </div>
                    <img src={Twitter} alt="Twitter" />
                  </div>
                }
                description={
                  <div className="">
                    <span style={{ color: "white" }}>
                      The @vitwit_team has been rocking it and contributing to
                      all layers of the stack: #tendermint, #cosmossdk, and
                      #ibc. Mad props, and look forward to continuing to work
                      with y'all!
                    </span>
                    <div className="flex justify-between">
                      <div className="flex">
                        <img src={Favorite} alt="Favorite-icon" />
                        <p>12</p>
                      </div>
                      <div>04 Dec 2023</div>
                    </div>
                  </div>
                }
              />

              <Alert
                className="alert2001"
                message={
                  <div className="flex justify-between">
                    <div className="flex space-x-2">
                      <img src={Person} alt="Person Image" />
                      <div className="">
                        <div className="Jack-Zampolin ">Jack-Zampolin </div>
                        <span style={{ color: "white", fontWeight: "500" }}>
                          @Jackk_1234
                        </span>
                      </div>
                    </div>
                    <img src={Twitter} alt="Twitter" />
                  </div>
                }
                description={
                  <div className="">
                    <span style={{ color: "white" }}>
                      The @vitwit_team has been rocking it and contributing to
                      all layers of the stack: #tendermint, #cosmossdk, and
                      #ibc. Mad props, and look forward to continuing to work
                      with y'all!
                    </span>
                    <div className="flex justify-between">
                      <div className="flex">
                        <img src={Favorite} alt="Favorite-icon" />
                        <p>12</p>
                      </div>
                      <div>04 Dec 2023</div>
                    </div>
                  </div>
                }
              />
              <Alert
                className="alert2001"
                message={
                  <div className="flex justify-between">
                    <div className="flex space-x-2">
                      <img src={Person} alt="Person Image" />
                      <div className="">
                        <div className="Jack-Zampolin ">Jack-Zampolin </div>
                        <span style={{ color: "white", fontWeight: "500" }}>
                          @Jackk_1234
                        </span>
                      </div>
                    </div>
                    <img src={Twitter} alt="Twitter" width={24} height={24}/>
                  </div>
                }
                description={
                  <div className="">
                    <span style={{ color: "white" }}>
                      The @vitwit_team has been rocking it and contributing to
                      all layers of the stack: #tendermint, #cosmossdk, and
                      #ibc. Mad props, and look forward to continuing to work
                      with y'all!
                    </span>
                    <p>
                      <span style={{ color: "white" }}>
                        The @vitwit_team has been rocking it and contributing to
                        all layers of the stack: #tendermint, #cosmossdk, and
                        #ibc. Mad props, and look forward to continuing to work
                        with y'all!
                      </span>
                    </p>
                  </div>
                }
              />
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delegate;
