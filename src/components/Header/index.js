import React from "react";
import Header from "./Header";
import CarouselSection from "../Carousel";

const Headers = () => {
  const headers = [
    {
      index: 0,
      style: { classes: "bg-img-1" },
      title: "History of surfing",
      description: `The riding of waves has likely existed since humans began swimming
    in the ocean. In this sense, bodysurfing is the oldest type of
    wave-catching. Standing up on what is now called a surfboard is a
    relatively recent innovation developed by the Polynesians.`,
    tabs: ['Home', 'About Us', 'Contact Us']
    },
    {
      index: 1,
      style: { classes: "bg-img-2" },
      title: "You should be here!",
      description: `5,000 capacity venue, holding some of the latest technology lighting with a 24 colour
    laser system Amnesia is one of the islands most legendary clubs.`,
    tabs: ['Home', 'About Us', 'Products', 'Contact Us']
    },
  ];
  return (
    <div id="headers" className="headers-section">
      {headers.map(({ index, style, title, description, tabs }) => (
        <Header
          key={index}
          style={style}
          data={{ title, description }}
          tabs={tabs}
        />
      ))}
      <CarouselSection />
    </div>
  );
};
export default Headers;
