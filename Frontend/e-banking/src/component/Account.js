import React, { Component } from "react";
import { Card } from "antd";

export class Account extends Component {
  render() {
    return (
      <div>
        Account
        <div>
          <Card title="Account Name" style={{ width: 300 }}>
            <p>Saving</p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <p>Account Number</p>
              <p>10010101</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <p>Balance</p>
              <p>50000</p>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Account;
