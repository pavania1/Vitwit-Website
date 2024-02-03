import React from "react";
import "./Development.css";

import { Alert, Space } from "antd";
const Development = () => {
  return (
    <>
      <div className="main22">
        {/* maindevelop cantioner start */}
        <div className="maindevelop">
          {/* leftdevelop cantioner start */}
          <div className="leftdevelop">
            <div className="subleftdevelop1">
              <h1>
                Development<br></br>
                <span className="servicesdevelop">Services</span>
              </h1>
            </div>
            <div>
              <p>
                We are a core tech company passionate about the research and
                development of technology solutions that transform businesses
                and people’s work styles.We are a core tech company passionate
                about the research andWe are a core tech company passionate
                about the research and development of technology solutions that
                transform businesses and people’s work styles.We are a core tech
                company passionate about the research and
              </p>
            </div>

            <div className="subleftdevelop2">
              <Space
                className="space-alert-dev"
                direction="vertical"
                style={{
                  width: "100%",
                }}
              >
                <Alert
                  className="alert2001"
                  message={
                    <span style={{ color: "white", fontWeight: "500" }}>
                      Cosmos Blockchain Development
                    </span>
                  }
                  description={
                    <span style={{ color: "white" }}>
                      Akash Network, the world’s first decentralized and
                      open-source cloud, accelerates deployment, scaleAkash
                      Network.
                    </span>
                  }
                />
                <Alert
                  className="alert2001"
                  message={
                    <span style={{ color: "white", fontWeight: "500" }}>
                      Blockchain Auditing
                    </span>
                  }
                  description={
                    <span style={{ color: "white" }}>
                      Akash Network, the world’s first decentralized and
                      open-source cloud, accelerates deployment, scaleAkash
                      Network.
                    </span>
                  }
                />
                <Alert
                  className="alert2001"
                  message={
                    <span style={{ color: "white", fontWeight: "500" }}>
                      IBC Apps
                    </span>
                  }
                  description={
                    <span style={{ color: "white" }}>
                      Akash Network, the world’s first decentralized and
                      open-source cloud, accelerates deployment, scaleAkash
                      Network.
                    </span>
                  }
                />
                <Alert
                  className="alert2001"
                  message={
                    <span style={{ color: "white", fontWeight: "500" }}>
                      COSM WASM Smart Contracts
                    </span>
                  }
                  description={
                    <span style={{ color: "white" }}>
                      Akash Network, the world’s first decentralized and
                      open-source cloud, accelerates deployment, scaleAkash
                      Network.
                    </span>
                  }
                />
              </Space>
            </div>
          </div>
          {/* leftdevelop cantioner end */}

          {/* RightDevelop cantioner start */}
          <div className="RightDevelop">
            {/* <div>
              <p>
                We are a core tech company passionate about the research and
                development of technology solutions that transform businesses
                and people’s work styles.We are a core tech company passionate
                about the research andWe are a core tech company passionate
                about the research and development of technology solutions that
                transform businesses and people’s work styles.We are a core tech
                company passionate about the research and
              </p>
            </div> */}
            <div className="figma2001">
              <span className="dot1">
                4 + <br></br>Total Networks
              </span>
              <span className="dot2">
                4 + <br></br>Total Networks
              </span>
              <span className="dot3">
                4 + <br></br>Total Networks
              </span>
              <span className="dot4">
                4 + <br></br>Total Networks
              </span>
              <span className="dot5">
                4 + <br></br>Total Networks
              </span>
              <span className="dot6"></span>
              <span className="dot7"></span>
              <span className="dot8"></span>
              <span className="dot9"></span>
              <span className="dot10"></span>
            </div>
          </div>
          {/*RightDevelop cantioner end */}
        </div>
        {/* maindevelop cantioner end */}
      </div>
      <br></br>
    </>
  );
};

export default Development;
