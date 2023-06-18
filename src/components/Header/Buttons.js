import React from "react";
import { Button } from "reactstrap";

export default function Buttons() {
  return (
    <div className="buttons">
      <Button
        className="btn-icon"
        color="transparent"
        href="#pablo"
        size="lg"
        onClick={(e) => e.preventDefault()}>
        <i className="fab fa-facebook-square"></i>
      </Button>
      <Button
        className="btn-icon"
        color="transparent"
        href="#pablo"
        size="lg"
        onClick={(e) => e.preventDefault()}>
        <i className="fab fa-twitter"></i>
      </Button>
      <Button
        className="btn-icon"
        color="transparent"
        href="#pablo"
        size="lg"
        onClick={(e) => e.preventDefault()}>
        <i className="fab fa-get-pocket"></i>
      </Button>
      <Button
        className="mr-3"
        color="info"
        href="#pablo"
        size="lg"
        onClick={(e) => e.preventDefault()}>
        Read More
      </Button>
    </div>
  );
}
