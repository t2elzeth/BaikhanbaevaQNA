import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";

// import images
import Question from "pages/Question";
import { useDispatch } from "react-redux";
import { requestQuestionsList } from "store/questions/actions";
import useTypedSelector from "hooks/useTypedSelector";
import { useHistory } from "react-router-dom";
import moment from "moment";

const BlogDetails = (): React.ReactElement => {
  const state = useTypedSelector(state => state.questions);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(requestQuestionsList());
  }, []);

  function handleRedirectToAsk() {
    history.push("/ask");
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
                            <div className="mt-5">
                              <h5 className="font-size-15">
                                <i className="bx bx-message-dots text-muted align-middle me-1" />
                                Q&A :

                                <div className="float-end">
                                  <button className="btn btn-outline-info">
                                    Show only answered
                                  </button>

                                  <button className="btn btn-outline-success text-decoration-underline mx-lg-2" onClick={handleRedirectToAsk}>
                                  Ask a question
                                </button>
                                </div>
                              </h5>

                              <div className="mt-4">
                                {
                                  state.questions.length !== 0
                                  && state.questions.map((q, key) =>
                                    <Question key={key} {...q} />)
                                }
                              </div>
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

export default BlogDetails;
