import React, { Component } from "react";
import { Card, Icon, Input, Button } from "antd";
import { Link, Route, Switch } from "react-router-dom";
import Confirm from "./Confirm";

export class Transfer extends Component {
  render() {
    return (
      <div>
        Tranfer
        <div style={{ display: "flex" }}>
          <Card style={{ width: 300 }}>
            <p>From</p>
            <p>Account Number</p>
            <p>Balance</p>
            <hr />
            <p>To</p>
            <Input placeholder="Account Number" />
            <Input placeholder="Amount" />{" "}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link to="/service/transfer/confirm">
                <Button type="primary">Check</Button>
              </Link>
            </div>
          </Card>
          <div>
            <Switch>
              <Route path="/service/transfer/confirm" component={Confirm} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Transfer;
