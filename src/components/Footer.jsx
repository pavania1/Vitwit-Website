import React from "react";
import VitwitLogo from "../assets/vitwit-logo.png";
import MailLogo from "../assets/social-icons/mail.png";
import YoutubeLogo from "../assets/social-icons/youtube.png";
import TwitterLogo from "../assets/social-icons/twitter.png";
import GithubLogo from "../assets/social-icons/github.png";
import LinkedInLogo from "../assets/social-icons/linkedln.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="flex flex-col justify-center items-start gap-6">
        <img className="nav__logo" src={VitwitLogo} alt="Vitwit Logo" />
        <p className="">
          Feel free to contact us by filling this form or you can even reach us
          out from the social media links below.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-white text-xl not-italic font-bold leading-5">
          {" "}
          Join our community
        </div>
        <div className="flex gap-6 ">
          <img className="  cursor-pointer" src={MailLogo} />
          <img className=" cursor-pointer" src={YoutubeLogo} />
          <img className="" src={TwitterLogo} />
          <img className="" src={GithubLogo} />
          <img className="" src={LinkedInLogo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

// const SocialIcon =({image, link="https://www.google.com"}) => {
//   return (
//     <div className='flex-center'>
//       <Link to={link} target="_blank">
//         <img className='' src={image} alt="" />
//       </Link>
//     </div>
//   )
// }
