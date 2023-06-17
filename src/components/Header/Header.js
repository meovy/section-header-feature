import React from "react";
import { Container } from "reactstrap";
import TransparentNavBar from "../NavBar/TransparentNavBar";

const Header = ({ style, data, tabs }) => {
  return (
    <>
      <div className="header-item page-header">
        <div className={`page-header-image ${style.classes}`}></div>
        <TransparentNavBar tabs={tabs} />
        <Container>
          <div className="ml-auto text-right col-md-7">
            <h1 className="title">{data.title}</h1>
            <h4 className="description">{data.description}</h4>
            <br />
            <div className="buttons">
              <a href="#pablo" className="btn-icon btn-neutral btn btn-link btn-lg">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#pablo" className="btn-icon btn-neutral btn btn-link btn-lg">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#pablo" className="btn-icon btn-neutral btn btn-link btn-lg">
                <i className="fab fa-get-pocket"></i>
              </a>
              <a href="#pablo" className="mr-3 btn btn-info btn-lg">
                Read More
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Header;
