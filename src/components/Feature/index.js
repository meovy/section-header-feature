import React from "react";
import Feature from "./Feature";

const Features = () => {
  return (
    <>
      <div id="features" className="features-section">
        Features
      </div>
      {[0, 1, 2].map((index) => (
        <Feature key={index} index={index} />
      ))}
    </>
  );
};
export default Features;
