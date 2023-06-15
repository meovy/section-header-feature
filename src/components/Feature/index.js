import React from "react";
import Feature from "./Feature";

const Features = () => {
  const features = [
    { index: 0, style: {} },
    { index: 1, style: { classes: 'feature-bg-img' } },
    { index: 2, style: {} }
  ]

  return (
    <>
      <div id="features" className="features-section">
        Features
      </div>
      {features.map(({ index, style }) => (
        <Feature key={index} index={index} style={style}/>
      ))}
    </>
  );
};
export default Features;
