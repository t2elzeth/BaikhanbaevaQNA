import React from "react";

import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";

function MonthlyEarning() {
  // const { statistic } = useEffect(state => state.statistic)

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardTitle className="mb-4 h4">Новых вопросов</CardTitle>
          <Row>
            <Col sm={6}>
              <h3>$34,252</h3>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default MonthlyEarning;
