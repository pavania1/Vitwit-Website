import React from "react";
import "./Development.css";
import { Alert, Space } from "antd";
const Development = () => {
  return (
    <>
      <div className="main22-infra">
        {/* maindevelop cantioner start */}
        <div className="maindevelop-infra">
          {/* leftdevelop cantioner start */}
          <div className="leftdevelop-infra">
            <div className="subleftdevelop1-infra">
              <h1>
                Development<br></br>
                <span className="servicesdevelop-infra">Services</span>
              </h1>
            </div>

            <div className="subleftdevelop2-infra">
              <Space
                className="space-alert-dev gap-10"
                direction="vertical"
                style={{
                  width: "100%",
                }}
              >
                <Alert
                  className="alert2001-infra"
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
                  style={{
                    padding: 15,
                    marginBottom: "10px",
                    marginTop: "15px",
                    width: "100%",
                  }}
                />
                <Alert
                  className="alert2001-infra"
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
                  style={{ padding: 15, marginBottom: "10px", width: "100%" }}
                />
                <Alert
                  className="alert2001-infra"
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
                  style={{ padding: 15, marginBottom: "10px", width: "100%" }}
                />
                <Alert
                  className="alert2001-infra"
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
                  style={{ padding: 15, marginBottom: "10px", width: "100%" }}
                />
              </Space>
            </div>
          </div>
          {/* leftdevelop cantioner end */}

          {/* RightDevelop cantioner start */}
          <div className="RightDevelop-infra">
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
            <div className="figma2001-infra">
              <div className="circles-infra">
                <span className="dot1-infra">
                  4 + <br></br>Total Networks
                </span>
                <span className="dot2-infra">
                  4 + <br></br>Total Networks
                </span>
                <span className="dot3-infra">
                  4 + <br></br>Total Networks
                </span>
                <span className="dot4-infra">
                  4 + <br></br>Total Networks
                </span>
                <span className="dot5-infra">
                  4 + <br></br>Total Networks
                </span>
                <span className="dot6-infra"></span>
                <span className="dot7-infra"></span>
                <span className="dot8-infra"></span>
                <span className="dot9-infra"></span>
                <span className="dot10-infra"></span>
              </div>
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
