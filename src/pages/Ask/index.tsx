import React, { ReactElement, useState } from "react";
import MetaTags from "react-meta-tags";

import { Button, Card, CardBody, CardTitle, Col, Container, Form, Row } from "reactstrap";
import Breadcrumbs from "components/Common/Breadcrumb";
import { createQuestion } from "store/questions/actions";
import { useDispatch } from "react-redux";

const Ask = (): ReactElement => {
  const dispatch = useDispatch();

  const [user, setUser] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value);
  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const handleDescriptionInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value);

  function submitData(e: React.FormEvent) {
    e.preventDefault();
    dispatch(createQuestion({ user, title, description }));
  }

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

                  <Form onSubmit={submitData}>
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
                          name="user"
                          placeholder="John Doe"
                          onInput={handleUserInput}
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
                          name="title"
                          placeholder="I don't know what to ask"
                          onInput={handleTitleInput}
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
                        name="description"
                        onInput={handleDescriptionInput}
                      />
                      </div>
                    </Row>
                    <Row>
                      <Col xl={8}>
                        <Button type="submit" color="primary" className="float-right">
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Form>
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