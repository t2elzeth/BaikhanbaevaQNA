import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Card, CardBody, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useDispatch, useSelector } from "react-redux";
import { getBalances } from "../../store/balance/actions";
import columns from "./columns";

const WalletActivities = ({ activeTab, toggleTab }) => {
  const { balances } = useSelector(state => state.balance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBalances());
  }, []);

  return (
    <Card>
      <CardBody>
        <h4 className="card-title mb-4">История баланса</h4>
        <ul className="nav nav-tabs nav-tabs-custom">
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === "1"
              })}
              onClick={() => {
                toggleTab("1");
              }}
            >
              All
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === "2"
              })}
              onClick={() => {
                toggleTab("2");
              }}
            >
              Buy
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === "3"
              })}
              onClick={() => {
                toggleTab("3");
              }}
            >
              Sell
            </NavLink>
          </NavItem>
        </ul>

        <div className="mt-4">
          <BootstrapTable keyField="id" data={balances} columns={columns} pagination={paginationFactory()} />
        </div>
      </CardBody>
    </Card>
  );
};

WalletActivities.propTypes = {
  walletHistory: PropTypes.array,
  activeTab: PropTypes.string,
  toggleTab: PropTypes.func
};

export default WalletActivities;
