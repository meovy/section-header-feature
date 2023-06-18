import React from "react";
import { Col, Container, Row } from "reactstrap";
import InfoItem from "./InfoItem";

const Feature = ({ data }) => {
  const { id, classes, title, description, info } = data;

  return (
    <div className={`page-feature feature-item feature-item-${id}`}>
      {classes && <div className={`page-feature-image ${classes}`} />}
      <Container>
        <Row>
          <Col md={8} className="ml-auto mr-auto text-center">
            <h2 className={`title-${id}`}>{title}</h2>
            <h4 className={`description-${id}`}>{description}</h4>
          </Col>
        </Row>
        <Row>
          {info.map((item) => (
            <InfoItem key={item.id} col={12 / info.length} {...item} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Feature;
