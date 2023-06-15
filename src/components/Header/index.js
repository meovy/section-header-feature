import React from "react";
import Header from "./Header";

const Headers = () => {
  const headers = [
    { index: 0, style: { classes: 'bg-img-1' } },
    { index: 1, style: { classes: 'bg-img-2' } },
    { index: 2, style: { classes: 'bg-img-3 bg-img-3-2 bg-img-3-3'} }
  ]
  return (
    <>
      <div id="headers" className="headers-section">
        Headers
      </div>
      {headers.map(({ index, style }) => (
        <Header key={index} index={index} style={style}/>
      ))}
    </>
  );
};
export default Headers;
