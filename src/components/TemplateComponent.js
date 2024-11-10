import React from "react";

const TemplateComponent = ({ topText, bottomText, randomImg }) => (
  <div>
    <h2 className="top">{topText}</h2>
    <img align="center" src={randomImg} alt="" />
    <h2 className="bottom">{bottomText}</h2>
  </div>
);

export default TemplateComponent;
