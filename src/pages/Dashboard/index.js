import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import WalletActivities from "./walletActivities";
import { requestStatisticActionCreator } from "@/store/statistic/actions";
import MonthlyEarning from "./MonthlyEarning";

function Dashboard() {
  const { statistic } = useSelector(state => state.statistic);
  const dispatch = useDispatch();

  useEffect(() => dispatch(requestStatisticActionCreator()), []);

  let reports = [
    { title: "Куплено машин", iconClass: "bx-copy-alt", description: `${statistic.car_orders?.number} | ${statistic.car_orders?.sum}` },
    { title: "Безналичные переводы", iconClass: "bx-copy-alt", description: `${statistic.cashless_payments?.number} | ${statistic.cashless_payments?.sum}` },
    { title: "Отправлено контейнеров", iconClass: "bx-copy-alt", description: `${statistic.shipped_containers?.number} | ${statistic.shipped_containers?.sum}` },
    { title: "Машин загружено на контейнеры", iconClass: "bx-copy-alt", description: `${statistic.loaded_cars?.number} | ${statistic.loaded_cars?.sum}` },
    { title: "Машин продано на аукционах", iconClass: "bx-copy-alt", description: `${statistic.sold_cars?.number} | ${statistic.sold_cars?.sum}` },
    { title: "Машин перепродано", iconClass: "bx-copy-alt", description: `${statistic.car_resale?.number} | ${statistic.car_resale?.sum}` },
    { title: "Машин на стоянках", iconClass: "bx-copy-alt", description: `${statistic.parked_cars?.number} | ${statistic.parked_cars?.sum}` },
    { title: "Сумма всех доходов", iconClass: "bx-copy-alt", description: `${statistic.incomes?.number} | ${statistic.incomes?.sum}` },
    { title: "Сумма всех расходов", iconClass: "bx-copy-alt", description: `0` },
  ];

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
