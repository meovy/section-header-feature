import React from "react";
import Header from "./Header";
import CarouselSection from "../Carousel";

const Headers = () => {
  const headers = [
    {
      id: 1,
      style: { bgImage: "bg-img-1", containerClass: 'ml-auto text-right' },
      title: "History of surfing",
      description: `The riding of waves has likely existed since humans began swimming
    in the ocean. In this sense, bodysurfing is the oldest type of
    wave-catching. Standing up on what is now called a surfboard is a
    relatively recent innovation developed by the Polynesians.`,
    tabs: ['Home', 'About Us', 'Contact Us']
    },
    {
      id: 2,
      style: { bgImage: "bg-img-2", containerClass: 'ml-auto mr-auto text-center' },
      title: "You should be here!",
      description: `5,000 capacity venue, holding some of the latest technology lighting with a 24 colour
    laser system Amnesia is one of the islands most legendary clubs.`,
    tabs: ['Home', 'About Us', 'Products', 'Contact Us']
    },
  ];
  return (
    <div id="headers" className="headers-section">
      {headers.map(({ id, style, title, description, tabs }) => (
        <Header
          key={id}
          style={style}
          data={{ id, title, description }}
          tabs={tabs}
        />
      ))}
      <CarouselSection />
    </div>
  );
};
export default Headers;
