import React, { ReactElement, useState } from "react";
import MetaTags from "react-meta-tags";

import { Card, CardBody, Col, Container, Form, Input, Label, Row } from "reactstrap";
import Breadcrumbs from "components/Common/Breadcrumb";
import { createQuestion } from "store/questions/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Ask = (): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value);
  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value);
  const handleDescriptionInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value);

  function submitData(e: React.FormEvent) {
    e.preventDefault();
    dispatch(createQuestion({ user, question, description }));
    
    history.push("/questions");
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Notarius</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs title="Notarius" breadcrumbItem="Q&A" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div className="pt-3">
                    <div className="row justify-content-center">
                      <div className="col-xl-8">
                        <div>
                          <div className="mt-4">
                            <div className="mt-4">
                              <h5 className="font-size-16 mb-3">Leave a Question</h5>

                              <Form onSubmit={submitData}>
                                <Row>
                                  <Col md={6}>
                                    <div className="mb-3">
                                      <Label htmlFor="commentname-input">
                                        Full name
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="commentname-input"
                                        placeholder="Enter name"
                                        onInput={handleUserInput}
                                      />
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="mb-3">
                                      <Label htmlFor="commentemail-input">
                                        Question title
                                      </Label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="commentemail-input"
                                        placeholder="It's related to..."
                                        onInput={handleTitleInput}
                                      />
                                    </div>
                                  </Col>
                                </Row>

                                <div className="mb-3">
                                  <Label htmlFor="commentmessage-input">
                                    Question body
                                  </Label>
                                  <textarea
                                    className="form-control"
                                    id="commentmessage-input"
                                    placeholder="Your question is..."
                                    rows={3}
                                    onInput={handleDescriptionInput}
                                  />
                                </div>

                                <div className="text-end">
                                  <button
                                    type="submit"
                                    className="btn btn-danger w-sm"
                                    onClick={history.goBack}
                                  >
                                    Go back
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-success w-sm mx-lg-2"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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