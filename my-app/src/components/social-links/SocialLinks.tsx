import React from "react";
import FacebookIcon from "../../images/icons/facebook-app-symbol.ico";
import GoogleIcon from "../../images/icons/google-plus.ico";
import PlusIcon from "../../images/icons/plus-icon.ico";
import "./SocialLinks.css";

const SocialLinks: React.FC = () => {
  return (
    <div className="social">
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <img src={FacebookIcon} alt="img" />
      </a>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        <img src={GoogleIcon} alt="img" />
      </a>
      <div>
        <img src={PlusIcon} alt="img" />
      </div>
    </div>
  );
};

export { SocialLinks };
