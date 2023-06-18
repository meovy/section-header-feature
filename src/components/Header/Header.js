import React from "react";
import { Col, Container } from "reactstrap";
import TransparentNavBar from "../NavBar/TransparentNavBar";

const Header = ({ style, data, tabs, notIcon }) => {
  return (
    <>
      <div className="header-item page-header">
        <div className={`page-header-image ${style.bgImage}`}></div>
        <TransparentNavBar tabs={tabs} notIcon={notIcon ?? false} />
        <Container className={data.componentPosition === "left" ? "row" : ""}>
          {data.componentPosition === "left" && (
            <Col md={5}>{data.component}</Col>
          )}
          <Col
            md={data.componentPosition === "left" ? 6 : 7}
            className={style.containerClass}>
            <h1 className="title">{data.title}</h1>
            <h4 className="description">{data.description}</h4>
            <br />
          </Col>
          {["bottom-center", "bottom-left", "bottom-right"].includes(
            data.componentPosition
          ) && (
            <>
              <br />
              <div className={style.containerClass}>{data.component}</div>
            </>
          )}
        </Container>
      </div>
    </>
  );
};
export default Header;
