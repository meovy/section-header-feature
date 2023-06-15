import React from "react";
import Header from "./Header";

const Headers = () => {
  return (
    <>
      <div id="headers" className="headers-section">
        Headers
      </div>
      {[0, 1, 2].map((index) => (
        <Header key={index} index={index} />
      ))}
    </>
  );
};
export default Headers;
