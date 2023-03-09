import React from "react";

import { content } from "../content/languages";
import { intakeInfo } from "../content/intake";

import "../styles/Intro.css";

const Intro = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <div className="intro" id="about">
      <h1>{intakeInfo.companyName} </h1>
      <h2>{intakeInfo.location}</h2>
      <div className="intro-text"></div>
    </div>
  );
};

export default Intro;
