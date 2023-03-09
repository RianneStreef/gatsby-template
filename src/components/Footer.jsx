import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { content } from "../content/languages";
import {intakeInfo} from "../content/intake"

import "../styles/Footer.css";

const Footer = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  let year = new Date().getFullYear();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    function handleResize() {
      const newSize = window.innerWidth;
      setScreenWidth(newSize);
    }
    window.addEventListener("resize", handleResize);
  }, [screenWidth]);

  return (
    <div className="footer">
      <p>
        Copyright © {intakeInfo.companyName}-{intakeInfo.mainActivity}- {intakeInfo.location} - {year}.{" "}
        {languageToUse.rights} {screenWidth < 768 ? <br /> : "- "}
        <Link to="/legal">{languageToUse.legal} </Link> -{" "}
        <a href="https://vts-webdesign.com" target="_blank">
          {" "}
          VTS Webdesign
        </a>
      </p>
    </div>
  );
};

export default Footer;
