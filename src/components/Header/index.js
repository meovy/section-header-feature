import React from "react";
import Header from "./Header";
import CarouselSection from "../Carousel";

const Headers = () => {
  const headers = [
    { index: 0, style: { classes: "bg-img-1" } },
    { index: 1, style: { classes: "bg-img-2" } },
  ];
  return (
    <>
      <div id="headers" className="headers-section" />
      {headers.map(({ index, style }) => (
        <Header key={index} index={index} style={style} />
      ))}
      <CarouselSection />
    </>
  );
};
export default Headers;
