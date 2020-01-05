import React, { Component } from "react";
import { Card } from "antd";

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accData: this.props.location.state.accData
    };
  }
  render() {
    // console.log(this.state.accData);
    return this.state.accData.map(acc => (
      <div>
        <Card title="Account Name" style={{ width: 300 }}>
          <p>{acc.acc_type}</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p>Account Number</p>
            <p>{acc.acc_number}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p>Balance</p>
            <p>{acc.balance}</p>
          </div>
        </Card>
      </div>
    ));
  }
}

export default Account;
