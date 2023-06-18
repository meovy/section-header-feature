import React from "react";
import { Col, Container } from "reactstrap";
import TransparentNavBar from "../NavBar/TransparentNavBar";

const Header = ({ style, data, tabs, notIcon }) => {
  return (
    <>
      <div className="header-item page-header">
        <div className={`page-header-image ${style.bgImage}`}></div>
        <TransparentNavBar tabs={tabs} notIcon={notIcon ?? false} />
        <Container>
          <Col md={7} className={style.containerClass}>
            <h1 className="title">{data.title}</h1>
            <h4 className="description">{data.description}</h4>
            <br />
            {data.component}
          </Col>
        </Container>
      </div>
    </>
  );
};
export default Header;
