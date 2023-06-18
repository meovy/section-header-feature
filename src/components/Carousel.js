import React from "react";

import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import Header from "./Header/Header";

function CarouselSection({ carousels }) {
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
    const nextIndex =
      activeIndex === carousels.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? carousels.length - 1 : activeIndex - 1;
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
            items={carousels}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {carousels.map((carousel) => (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={carousel.id}>
              <Header
                style={carousel.style}
                data={{
                  id: carousel.id,
                  title: carousel.title,
                  description: carousel.description,
                  component: carousel.component,
                  componentPosition: carousel.componentPosition,
                }}
                tabs={carousel.tabs}
                notIcon={carousel.notIcon}
              />
            </CarouselItem>
          ))}
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
