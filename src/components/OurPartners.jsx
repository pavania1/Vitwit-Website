import React, { useState, useEffect } from "react";
import "./Ourpartners.css";
import { Alert, Space } from "antd";
import Security from "../assets/security.png";
const OurPartners = () => {
  const [typedText, setTypedText] = useState("");
  const [typedText2, setTypedText2] = useState("");

  const textsToType = ["Why Delegate to", "Us ?"];

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (textsToType[textIndex].length === charIndex && textIndex === 1) {
        clearInterval(typingInterval);
      } else if (textIndex === 0 && charIndex === textsToType[0].length) {
        charIndex = 0;
        textIndex++;
      } else if (textIndex === 1) {
        charIndex++;
        setTypedText2(textsToType[1].slice(0, charIndex));
      } else {
        charIndex++;
        setTypedText(textsToType[0].slice(0, charIndex));
      }
    }, 200);
    return () => clearInterval(typingInterval);
  }, []);
  return (
    <>
      <div className="main22-ourpartners">
        {/* maindevelop cantioner start */}
        <div className="maindevelop-partners">
          {/* leftdevelop cantioner start */}
          <div className="leftdevelop-partners">
            <div className="subleftdevelop1-partners">
              <h1>
                {typedText}
                <br></br>
                <span className="servicesdevelop">{typedText2}</span>
              </h1>
            </div>
            <div className="ourpartners-text">
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
            <div className="figma2001-partners">
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
          {/* leftdevelop cantioner end */}

          {/* RightDevelop cantioner start */}
          <div className="RightDevelop-partners">
            <div className="subleftdevelop2-partners">
              <Space
                className="space-alert-dev"
                direction="vertical"
                style={{
                  width: "100%",
                }}
              >
                <div className="alert-main">
                  <div className="alert-right1-partners">
                    <Alert
                      className="alert2001"
                      message={
                        <div>
                          <img
                            className="eng-dot"
                            src={Security}
                            alt="Alert Image"
                          />
                          <span className="head-text">Infrastructure</span>
                        </div>
                      }
                      description={
                        <span className="para-text">
                          Akash Network, the world’s first decentralized and
                          open-source cloud, accelerates deployment, scaleAkash
                          Network.
                        </span>
                      }
                      style={{ marginLeft: "70%" }}
                    />

                    <Alert
                      className="alert2002"
                      message={
                        <div>
                          <img
                            className="eng-dot4"
                            src={Security}
                            alt="Alert Image"
                          />
                          <span className="head-text">
                            Enterprise-grade infrastructure
                          </span>
                        </div>
                      }
                      description={
                        <span className="para-text">
                          Akash Network, the world’s first decentralized and
                          open-source cloud, accelerates deployment, scaleAkash
                          Network.
                        </span>
                      }
                      style={{ marginLeft: "70%" }}
                    />
                  </div>

                  <div className="alert-right2-partners">
                    <Alert
                      className="alert2003"
                      message={
                        <div>
                          <img
                            className="eng-dot2"
                            src={Security}
                            alt="Alert Image"
                          />
                          <span className="head-text">Engineering</span>
                        </div>
                      }
                      description={
                        <span className="para-text">
                          Akash Network, the world’s first decentralized and
                          open-source cloud, accelerates deployment, scaleAkash
                          Network.
                        </span>
                      }
                      style={{ marginLeft: "62%" }}
                    />
                    <Alert
                      className="alert2004"
                      message={
                        <div>
                          <img
                            className="eng-dot3"
                            src={Security}
                            alt="Alert Image"
                          />

                          <span className="head-text">
                            Security, Monitoring & Alerting
                          </span>
                        </div>
                      }
                      description={
                        <span className="para-text">
                          Akash Network, the world’s first decentralized and
                          open-source cloud, accelerates deployment, scaleAkash
                          Network.
                        </span>
                      }
                      style={{ marginLeft: "62%" }}
                    />
                  </div>
                </div>
              </Space>
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

export default OurPartners;
