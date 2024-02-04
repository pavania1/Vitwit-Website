import React from "react";
import "./Infrastructure.css";
import { Alert } from "antd";
import Security from "../assets/security.png";

import Cosmos from "../assets/infra-icons/comos-infra.png";
import Polygen from "../assets/infra-icons/polygon-infra.png";
import Osmosis from "../assets/infra-icons/osmosis-infra.png";
import Akash from "../assets/infra-icons/akash-infra.png";
import Passage from "../assets/infra-icons/passage-infra.png";
import Stargaze from "../assets/infra-icons/stargaze-infra.png";
import Regen from "../assets/infra-icons/regen-infra.png";
import Umee from "../assets/infra-icons/umee-infra.png";
import Evmos from "../assets/infra-icons/evmos-infra.png";
import Agoric from "../assets/infra-icons/agoric-infra.png";
import Oasis from "../assets/infra-icons/oasis-infra.png";
import Mainnet from "../assets/mainnet.svg";
import Devops from "../assets/devops.svg";
import WhiteLabelinfra from "../assets/whitelabelinfra.svg";
const Infrastructure = () => {
  return (
    <>
      <div className="infrastructure">
        <div className="infrastructure-main-head">
          <div className="infrastructure-services-h1">
            <h1>
              Infrasturcture &nbsp;
              <span className="infrastructure-services">Services</span>
            </h1>
          </div>

          <div className="infrastructure-text">
            We are a core tech company passionate about the research and
            development of technology solutions that transform businesses and
            people’s work <br></br>styles.We are a core tech company passionate
            about the research and development of technology solutions that
            transform.
          </div>
        </div>
        <div className="bottom-infrastructure">
          <div className="infrastructure-left">
            <div className="alert-right1-infra">
              <Alert
                className="alert3001"
                message={
                  <div>
                    <div className="mainnet-dot">
                      <img src={Mainnet} alt="Alert Image" />
                    </div>
                    <span className="infra-icons-text">
                      Mainnet, Testnet strategy
                    </span>
                  </div>
                }
                description={
                  <span className="infra-text-para">
                    Akash Network, the world’s first decentralized and
                    open-source cloud, accelerates deployment, scaleAkash
                    Network.
                  </span>
                }
                style={{ marginBottom: "10%", width: "60%", height: "40%" }}
              />

              <Alert
                className="alert3002"
                message={
                  <div>
                    <div className="whitelabel-dot">
                      <img src={WhiteLabelinfra} alt="Alert Image" />
                    </div>
                    <span className="infra-icons-text">
                      White-label infrastructure hosting
                    </span>
                  </div>
                }
                description={
                  <span className="infra-text-para">
                    Akash Network, the world’s first decentralized and
                    open-source cloud, accelerates deployment, scaleAkash
                    Network.
                  </span>
                }
                style={{ marginBottom: "10%", width: "60%", height: "45%" }}
              />
            </div>
            <div className="alert-right2-infra">
              <Alert
                className="alert3002"
                message={
                  <div>
                    <div className="enterprise-dot">
                      <img src={Devops} alt="Alert Image" />
                    </div>
                    <span className="infra-icons-text">
                      Enterprise-grade infrastructure
                    </span>
                  </div>
                }
                description={
                  <span className="infra-text-para">
                    Akash Network, the world’s first decentralized and
                    open-source cloud, accelerates deployment, scaleAkash
                    Network.
                  </span>
                }
                style={{
                  marginBottom: "10%",
                  width: "70%",
                  height: "55%",
                  marginLeft: "-30%",
                }}
              />
            </div>
          </div>
          <div className="right-infra">
            <div className="flex gap-24 icons-infra">
              <div className="">
                <div className="comsos-logo-style">
                  <img src={Cosmos} alt="Cosmos-logo" />
                </div>
                <div>
                  <button className="cosmos infra-icons-text">
                    Cosmos Hub
                  </button>
                </div>
              </div>
              <div className="">
                <div className="comsos-logo-style">
                  <img src={Polygen} alt="polygen-logo" />
                </div>
                <button className="polygen infra-icons-text">Polygen</button>
              </div>
              <div className="">
                <div className="comsos-logo-style">
                  <img
                    src={Osmosis}
                    alt="Osmosis-logo"
                    width={53.2}
                    height={60}
                    marginLeft={50}
                  />
                </div>
                <button className="osmosis infra-icons-text">Osmosis</button>
              </div>
            </div>
            <div className="flex gap-24 icons-infra">
              <div className="comsos-logo-style">
                <img src={Akash} alt="Akash-logo" />
              </div>
              <button className="akash infra-icons-text">Akash</button>

              <div className="cosmos-infra">
                <div className="comsos-logo-style">
                  <img
                    src={Passage}
                    alt="Passage-logo"
                    width={53.2}
                    height={60}
                    marginLeft={50}
                  />
                </div>
                <button className="passage infra-icons-text">Passage</button>
              </div>

              <div className="">
                <div className="comsos-logo-style">
                  <img
                    src={Oasis}
                    alt="Oasis-logo"
                    width={53.2}
                    height={60}
                    marginLeft={50}
                  />
                </div>
                <button className="oasis infra-icons-text">Oasis</button>
              </div>
            </div>
            <div className="flex gap-24 icons-infra">
              <div className="">
                <div className="comsos-logo-style">
                  <img
                    src={Stargaze}
                    alt="Stargaze-logo"
                    width={53.2}
                    height={60}
                    marginLeft={50}
                  />
                </div>
                <button className="stargaze infra-icons-text">Stargaze</button>
              </div>
              <div className="">
                <div className="comsos-logo-style">
                  <img
                    src={Regen}
                    alt="Regen-logo"
                    width={53.2}
                    height={60}
                    marginLeft={50}
                  />
                </div>
                <button className="regen infra-icons-text">Regen</button>
              </div>
              <div className="">
                <div className="comsos-logo-style">
                  <img
                    src={Umee}
                    alt="Umee-logo"
                    width={53.2}
                    height={60}
                    marginLeft={50}
                  />
                </div>
                <button className="umee infra-icons-text">Umee</button>
              </div>
            </div>
            <div className="flex gap-24 icons-infra">
              <div className="">
                <div className="comsos-logo-style">
                  <img
                    src={Evmos}
                    alt="Evmos-logo"
                    width={53.2}
                    height={60}
                    marginLeft={50}
                  />
                </div>
                <button className="evmos infra-icons-text">Evmos</button>
              </div>
              <div className="cosmos-infra">
                <div className="comsos-logo-style">
                  <img
                    src={Agoric}
                    alt="Agoric-logo"
                    width={53.2}
                    height={60}
                    marginLeft={50}
                  />
                </div>
                <button className="agoric infra-icons-text">Agoric</button>
              </div>
              <div className="cosmos-infra">
                <button className="cosmos infra-icons-text">10+More</button>
              </div>
            </div>
            <div className="">
              <button className="infra-btn infra-icons-text">
                Stake with VITWIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infrastructure;
