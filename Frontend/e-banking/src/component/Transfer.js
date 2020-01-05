import React, { Component } from "react";
import { Card, Icon, Input, Button } from "antd";
import { Link, Route, Switch } from "react-router-dom";
import Confirm from "./Confirm";

export class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accData: this.props.location.state.accData,
      acc_recive: "",
      amount: ""
    };
  }
  render() {
    console.log(this.state.acc_recive);
    console.log(this.state.amount);
    return (
      <div style={{ display: "flex" }}>
        <Card style={{ width: 300 }}>
          <p>From</p>
          <p>{this.state.accData[0].acc_number}</p>
          <p>{this.state.accData[0].balance}</p>
          <hr />
          <p>To</p>
          <Input
            placeholder="Account Number"
            onChange={e => this.setState({ acc_recive: e.target.value })}
          />
          <Input
            placeholder="Amount"
            onChange={e => this.setState({ amount: e.target.value })}
          />{" "}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link
              to={{
                pathname: "/service/transfer/confirm",
                state: {
                  acc_send: this.state.accData[0].acc_number,
                  acc_recive: this.state.acc_recive,
                  amount: parseInt(this.state.amount)
                }
              }}
            >
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
    );
  }
}

export default Transfer;
