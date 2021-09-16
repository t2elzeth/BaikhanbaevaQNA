import React, { ReactElement } from "react";
import MetaTags from "react-meta-tags";

import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Ask = (): ReactElement => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Ask a question</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs title="Questions" breadcrumbItem="Ask" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Ask a question</CardTitle>
                  <p className="card-title-desc">
                    Fill the following fields to submit a new question
                  </p>
                  <Row className="mb-3 mt-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Full name
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="John Doe"
                      />
                    </div>
                  </Row>

                  <Row className="mb-3 mt-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Question title
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="I don't know what to ask"
                      />
                    </div>
                  </Row>

                  <Row className="mb-3 mt-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Question body
                    </label>
                    <div className="col-md-10">
                      <textarea
                        className="form-control"
                        placeholder="Write deeper explanation of the issue"
                      />
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Ask;