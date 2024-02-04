// import React from "react";
// import Enginnering from "../assets/engineering.png";
// import Infrastructure from "../assets/infrastructure.png";
// import Enterprise from "../assets/enterprise.png";
// import Security from "../assets/security.png";
// import "./Ourpartners.css"

// const OurPartners = () => {
//   return (
//     <>
//     <div className="our-partners">
//       <div className="our-partners-frame1">
//         <div className="leftdevelop">
//           <div className="subleftdevelop1">
//             <h1>
//               Why Delegate to<br></br>
//               <span className="servicesdevelop">Us?</span>
//             </h1>
//           </div>
//           <div className="ourpartners-text">
//             We are a core tech company passionate about the research and
//             development of technology solutions that transform businesses and
//             people’s work styles.We are a core tech company passionate about the
//             research andWe are a core tech company passionate about the research
//             and development of technology solutions that transform businesses
//             and people’s work styles.We are a core tech company passionate about
//             the research and
//           </div>
//           <div className="figma2001">
//             <span className="dot1">
//               4 + <br></br>Total Networks
//             </span>
//             <span className="dot2">
//               4 + <br></br>Total Networks
//             </span>
//             <span className="dot3">
//               4 + <br></br>Total Networks
//             </span>
//             <span className="dot4">
//               4 + <br></br>Total Networks
//             </span>
//             <span className="dot5">
//               4 + <br></br>Total Networks
//             </span>
//             <span className="dot6"></span>
//             <span className="dot7"></span>
//             <span className="dot8"></span>
//             <span className="dot9"></span>
//             <span className="dot10"></span>
//           </div>
//         </div>
//         <div className="RightDevelop">
//           <div className="ourpartners-card flex-col">
//             <div className="eng-dot">
//               <img src={Enginnering} alt="engineering-icon" />
//             </div>
//             <h1>Engineering</h1>
//             <div>
//               Akash Network, the world’s first decentralized and open-source
//               cloud, accelerates deployment, scaleAkash Network.
//             </div>
//           </div>
//           <div className="ourpartners-card flex-col">
//             <div className="eng-dot">
//               <img src={Infrastructure} alt="Infrastructure-icon" />
//             </div>
//             <h1>Infrastructure</h1>
//             <div>
//               Akash Network, the world’s first decentralized and open-source
//               cloud, accelerates deployment, scaleAkash Network.
//             </div>
//           </div>
//           <div className="ourpartners-card flex-col">
//             <div className="eng-dot">
//               <img src={Security} alt="security-icon" />
//             </div>
//             <h1>Security, Monitoring & Alerting</h1>
//             <div>
//               Akash Network, the world’s first decentralized and open-source
//               cloud, accelerates deployment, scaleAkash Network.`
//             </div>
//           </div>
//           <div className="ourpartners-card flex-col">
//             <div className="eng-dot">
//               <img src={Enterprise} alt="enterprise-icon" />
//             </div>
//             <h1>Enterprise-grade infrastructure</h1>
//             <div>
//               Akash Network, the world’s first decentralized and open-source
//               cloud, accelerates deployment, scaleAkash Network.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default OurPartners;

import React from "react";
import "./Ourpartners.css";
import { Alert, Space } from "antd";
import Security from "../assets/security.png";
const OurPartners = () => {
  return (
    <>
      <div className="main22-ourpartners">
        {/* maindevelop cantioner start */}
        <div className="maindevelop-partners">
          {/* leftdevelop cantioner start */}
          <div className="leftdevelop-partners">
            <div className="subleftdevelop1-partners">
              <h1>
                Why Delegate to<br></br>
                <span className="servicesdevelop">Us ?</span>
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
                          <span className="head-text">
                            Infrastructure
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
                      style={{marginLeft: "70%"}}
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
                      style={{marginLeft: "70%"}}
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
                          <span className="head-text">
                            Engineering
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
                      style={{marginLeft: "62%"}}
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
                      style={{marginLeft: "62%"}}
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
