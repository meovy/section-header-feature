import React from "react";

import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

const items = [
  {
    src: require("../assets/images/header3.jpg"),
    altText: "Carousel 1",
  },
  {
    src: require("../assets/images/header3-2.jpg"),
    altText: "Carousel 2",
  },
  {
    src: require("../assets/images/header3-3.jpg"),
    altText: "Carousel 3",
  },
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="header-item" id="carousel">
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {items.map((item) => {
            return (
              <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={item.src}>
                <img src={item.src} alt={item.altText} width="100%" />
              </CarouselItem>
            );
          })}
          <a
            className="carousel-control-prev"
            data-slide="prev"
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              previous();
            }}
            role="button">
            <i className="now-ui-icons arrows-1_minimal-left"></i>
          </a>
          <a
            className="carousel-control-next"
            data-slide="next"
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              next();
            }}
            role="button">
            <i className="now-ui-icons arrows-1_minimal-right"></i>
          </a>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselSection;
