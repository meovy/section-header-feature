import React from "react";
import { Col, Container } from "reactstrap";
import TransparentNavBar from "../NavBar/TransparentNavBar";
import Buttons from "./Buttons";
import FormHeader from "./Form";

const Header = ({ style, data, tabs }) => {
  return (
    <>
      <div className="header-item page-header">
        <div className={`page-header-image ${style.bgImage}`}></div>
        <TransparentNavBar tabs={tabs} />
        <Container>
          <Col md={7} className={style.containerClass}>
            <h1 className="title">{data.title}</h1>
            <h4 className="description">{data.description}</h4>
            <br />
            {data.id === 1 && <Buttons />}
          </Col>
          {data.id === 2 && <FormHeader />}
        </Container>
      </div>
    </>
  );
};
export default Header;
