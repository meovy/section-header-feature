import React, { useEffect, useState } from "react";
import Header from "./Header";
import CarouselSection from "../Carousel";
import { list as headerData } from "../../constants/header";

const Headers = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(headerData);
  }, []);

  return (
    <div id="headers" className="headers-section">
      {list.map(({ id, style, title, description, tabs, isCarousel, carousels, component }) => (
        <div key={id}>
          {!isCarousel && (
            <Header
              style={style}
              data={{ id, title, description, component }}
              tabs={tabs}
            />
          )}
          {isCarousel && <CarouselSection carousels={carousels} />}
        </div>
      ))}
    </div>
  );
};
export default Headers;
