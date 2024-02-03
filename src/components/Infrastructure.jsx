import React from "react";
import "./Infrastructure.css";
import { Alert } from "antd";
import Security from "../assets/security.png";

const Infrastructure = () => {
  return (
    <>
      <div className="infrastructure">
        <div className="infrastructure-services-h1 delegate-text">
          <h1>
            Infrasturcture &nbsp;
            <span className="infrastructure-services">Services</span>
          </h1>
        </div>
        <div className="delegate-text">
          We are a core tech company passionate about the research and
          development of technology solutions that transform businesses and
          people’s work <br></br>styles.We are a core tech company passionate
          about the research and development of technology solutions that
          transform.
        </div>
        <div className="bottom-infrastructure">
          <div className="left">
            <div className="alert-right1">
              <Alert
                className="alert3001"
                message={
                  <div>
                    <img className="eng-dot" src={Security} alt="Alert Image" />
                    <span style={{ color: "white", fontWeight: "500" }}>
                      Infrastructure
                    </span>
                  </div>
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
                className="alert3002"
                message={
                  <div>
                    <img
                      className="eng-dot4"
                      src={Security}
                      alt="Alert Image"
                    />
                    <span style={{ color: "white", fontWeight: "500" }}>
                      Enterprise-grade infrastructure
                    </span>
                  </div>
                }
                description={
                  <span style={{ color: "white" }}>
                    Akash Network, the world’s first decentralized and
                    open-source cloud, accelerates deployment, scaleAkash
                    Network.
                  </span>
                }
              />
            </div>
            <div className="alert-right2">
              <Alert
                className="alert2004"
                message={
                  <div>
                    <img
                      className="eng-dot3"
                      src={Security}
                      alt="Alert Image"
                    />

                    <span style={{ color: "white", fontWeight: "500" }}>
                      Security, Monitoring & Alerting
                    </span>
                  </div>
                }
                description={
                  <span style={{ color: "white" }}>
                    Akash Network, the world’s first decentralized and
                    open-source cloud, accelerates deployment, scaleAkash
                    Network.
                  </span>
                }
              />
            </div>
          </div>
          <div className="right">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Infrastructure;
