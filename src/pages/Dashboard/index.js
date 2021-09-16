import React from "react";
import MetaTags from "react-meta-tags";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumb from "@/components/Common/Breadcrumb";
import WalletActivities from "./walletActivities";
import MonthlyEarning from "./MonthlyEarning";

function Dashboard() {
  let reports = [];

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumb
            title={"Dashboards"}
            breadcrumbItem={"Dashboard"}
          />

          <Row>
            <Col xl="4">
              <MonthlyEarning />
            </Col>
            <Col xl="8">
              <Row>
                {/* Reports Render */}
                {reports.map((report, key) => (
                  <Col md="4" key={"_col_" + key}>
                    <Card className="mini-stats-wid">
                      <CardBody>
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <p className="text-muted fw-medium">
                              {report.title}
                            </p>
                            <h4 className="mb-0">{report.description}</h4>
                          </div>
                          <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i
                                  className={
                                    "bx " + report.iconClass + " font-size-24"
                                  }
                                />
                              </span>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <WalletActivities />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
