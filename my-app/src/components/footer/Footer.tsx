import React from "react";
import ArGoldLogo from "../../images/logo/AR_logo_gold.png";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer__inner">
          <div>© 2023 KINOMANIA, Inc. All rights reserved.</div>
          <img src={ArGoldLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export { Footer };
