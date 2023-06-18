import React from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

export default function FormHeader() {
  return (
    <Col md={10} className="ml-auto mr-auto">
      <Card className="card-raised card-form-horizontal card-plain">
        <CardBody>
          <Form action="" className="form" method="">
            <Row>
              <Col md={3}>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Full Name"
                    type="text"
                    bsSize="lg"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Your Email"
                    type="email"
                    bsSize="lg"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Password"
                    type="password"
                    bsSize="lg"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <Button color="info" className="btn-round btn-block">
                  Join Us
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
}
