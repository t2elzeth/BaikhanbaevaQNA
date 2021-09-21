import React from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Label,
  Row
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "@/components/Common/Breadcrumb";

// import images
import img1 from "@/assets/images/small/img-2.jpg";
import Question from "@/pages/Question";

const BlogDetails = () => {
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
                          <div className="text-center">
                            <div className="mb-4">
                              <Link
                                to="#"
                                className="badge bg-light font-size-12"
                              >
                                Q&A
                              </Link>
                            </div>
                            <h4>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi cum delectus,
                            </h4>
                            <p className="text-muted mb-4">
                              <i className="mdi mdi-calendar me-1"></i> 10 Apr, 2020
                            </p>
                          </div>

                          <hr />
                          <div className="text-center">
                            <Row>
                              <Col sm={4}>
                                <div>
                                  <p className="text-muted mb-2">Categories</p>
                                  <h5 className="font-size-15">Project</h5>
                                </div>
                              </Col>
                              <Col sm={4}>
                                <div className="mt-4 mt-sm-0">
                                  <p className="text-muted mb-2">Date</p>
                                  <h5 className="font-size-15">10 Apr, 2020</h5>
                                </div>
                              </Col>
                              <Col sm={4}>
                                <div className="mt-4 mt-sm-0">
                                  <p className="text-muted mb-2">Post by</p>
                                  <h5 className="font-size-15">Gilbert Smith</h5>
                                </div>
                              </Col>
                            </Row>
                          </div>
                          <hr />

                          <div className="my-5">
                            <img
                              src={img1}
                              alt=""
                              className="img-thumbnail mx-auto d-block"
                            />
                          </div>

                          <hr />

                          <div className="mt-4">
                            <div className="text-muted font-size-14">
                              <p>
                                Neque porro quisquam est, qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit, sed
                                quia non numquam eius modi tempora incidunt ut
                                labore et dolore magnam enim ad minima veniam quis
                              </p>

                              <p className="mb-4">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit laboriosam,
                                nisi ut aliquid ex ea reprehenderit qui in ea
                                voluptate velit esse quam nihil molestiae
                                consequatur, vel illum qui dolorem eum fugiat quo
                                voluptas nulla pariatur? At vero eos et accusamus et
                                iusto odio dignissimos ducimus qui blanditiis
                                praesentium voluptatum deleniti atque corrupti quos
                                dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt
                              </p>

                              <blockquote className="p-4 border-light border rounded mb-4">
                                <div className="d-flex">
                                  <div className="me-3">
                                    <i className="bx bxs-quote-alt-left text-dark font-size-24"></i>
                                  </div>
                                  <div>
                                    <p className="mb-0">
                                      {" "}
                                      At vero eos et accusamus et iusto odio
                                      dignissimos ducimus qui blanditiis praesentium
                                      deleniti atque corrupti quos dolores et quas
                                      molestias excepturi sint quidem rerum facilis
                                      est
                                    </p>
                                  </div>
                                </div>
                              </blockquote>

                              <p>
                                Itaque earum rerum hic tenetur a sapiente delectus,
                                ut aut reiciendis voluptatibus maiores alias
                                consequatur aut perferendis doloribus asperiores
                                repellat. Sed ut perspiciatis unde omnis iste natus
                                error sit
                              </p>

                              <div className="mt-4">
                                <h5 className="mb-3">Title: </h5>

                                <div>
                                  <div className="row">
                                    <div className="col-lg-4 col-sm-6">
                                      <div>
                                        <ul className="ps-4">
                                          <li className="py-1">
                                            Donec sodales sagittis
                                          </li>
                                          <li className="py-1">
                                            Sed consequat leo eget
                                          </li>
                                          <li className="py-1">
                                            Aliquam lorem ante
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                      <div>
                                        <ul className="ps-4">
                                          <li className="py-1">
                                            Aenean ligula eget
                                          </li>
                                          <li className="py-1">
                                            Cum sociis natoque
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <hr />

                            <div className="mt-5">
                              <h5 className="font-size-15">
                                <i className="bx bx-message-dots text-muted align-middle me-1"/>
                                Q&A :
                              </h5>

                              <div>
                                <Question />
                              </div>
                            </div>

                            <div className="mt-4">
                              <h5 className="font-size-16 mb-3">Leave a Message</h5>

                              <Form>
                                <Row>
                                  <Col md={6}>
                                    <div className="mb-3">
                                      <Label htmlFor="commentname-input">
                                        Name
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="commentname-input"
                                        placeholder="Enter name"
                                      />
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="mb-3">
                                      <Label htmlFor="commentemail-input">
                                        Email
                                      </Label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        id="commentemail-input"
                                        placeholder="Enter email"
                                      />
                                    </div>
                                  </Col>
                                </Row>

                                <div className="mb-3">
                                  <Label htmlFor="commentmessage-input">
                                    Message
                                  </Label>
                                  <textarea
                                    className="form-control"
                                    id="commentmessage-input"
                                    placeholder="Your message..."
                                    rows="3"
                                  ></textarea>
                                </div>

                                <div className="text-end">
                                  <button
                                    type="submit"
                                    className="btn btn-success w-sm"
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

export default BlogDetails;
