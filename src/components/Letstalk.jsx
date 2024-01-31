import React from "react";
import GithubLogo from "../assets/social-icons/github.png";
import LinkedInLogo from "../assets/social-icons/linkedln.png";
import TelegramLogo from "../assets/social-icons/telegram.png";
import TwitterLogo from "../assets/social-icons/twitter.png";
import PersonIcon from "../assets/person-icon.svg";
import EmailIcon from "../assets/gmail.svg";

const Letstalk = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="justify-between items-center p-20">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="lets-text">
            Lets <span className="talk-text">Talk</span>
          </div>
          <p className="text-white text-sm not-italic font-normal leading-6">
            {" "}
            Feel free to conatct us by filling this form or you can even reach
            us out <p className="">from the social media links below.</p>
          </p>
          <SocialIcons />
        </div>
        <div className="form-bg">
          <form onSubmit={handleSubmit} className=" space-y-10">
            <div className="flex space-x-4">
              <div className="text-field-bg">
                <div className="gap-2 flex">
                  <img className="" src={PersonIcon} alt="Person Icon" />
                  <p className="nav-text">Name</p>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    style={{ background: "none" }}
                  />
                </div>
              </div>
              <div className="text-field-bg">
                <div className="gap-2 flex">
                  <img className="" src={EmailIcon} alt="Person Icon" />
                  <p className="nav-text">Email</p>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    style={{ background: "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="text-field-bg">
              <div className="gap-2 flex ">
                <p className="nav-text ">Message</p>
                <input
                  type="memo"
                  id="memo"
                  name="memo"
                  required
                  style={{ background: "none" }}
                />
              </div>
            </div>
            <button className="send-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Letstalk;

const SocialIcons = () => {
  return (
    <div className="flex gap-6">
      <SocialLink link="https://www.github.com" icon={GithubLogo} />
      <SocialLink link="https://www.linkedin.com" icon={LinkedInLogo} />
      <SocialLink link="https://www.telegram.com" icon={TelegramLogo} />
      <SocialLink link="https://www.twitter.com" icon={TwitterLogo} />
    </div>
  );
};

const SocialLink = ({ link, icon }) => {
  return (
    <div className="contact__socials items-center flex justify-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <img className="contact__socials__icon" src={icon} alt="Social Icon" />
      </a>
    </div>
  );
};
