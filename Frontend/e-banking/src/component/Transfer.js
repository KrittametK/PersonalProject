import React, { Component } from "react";
import { Card, Input, Button, notification } from "antd";
import { Route, Switch } from "react-router-dom";
import Confirm from "./Confirm";
import Axios from "axios";

export class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: this.props.location.state.userid,
      accdata: [],
      acc_recive: "",
      amount: ""
    };
  }

  componentDidMount = () => {
    Axios.post("http://localhost:8080/getAccountById", {
      id: this.state.userid
    })
      .then(result => {
        console.log(this.state.userid);
        console.log(result.data);
        this.setState({ accdata: result.data });
        console.log(this.state.accdata);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleCheck = () => {
    if (
      this.state.accdata[0].acc_number !== this.state.acc_recive &&
      this.state.amount > 0
    ) {
      this.props.history.push("/service/transfer/confirm", {
        acc_send: this.state.accdata[0].acc_number,
        acc_recive: this.state.acc_recive,
        amount: parseInt(this.state.amount)
      });
    } else {
      this.openNotification();
    }
  };

  openNotification = () => {
    notification.open({
      message: "Alert !!!",
      description: "data invalid",
      style: {
        width: 600,
        marginLeft: 335 - 600
      }
    });
  };

  render() {
    console.log(this.state.accdata);
    return (
      <div style={{ display: "flex" }}>
        <Card style={{ width: 300 }}>
          <h3>
            <b>From</b>
          </h3>
          {this.state.accdata.length > 0 ? (
            <span>
              <h4>Account Number</h4>
              <p>{this.state.accdata[0].acc_number}</p>
              <h4>Balance</h4>
              <p>{this.state.accdata[0].balance}</p>
            </span>
          ) : (
            ""
          )}
          <hr />
          <h3>
            <b>To</b>
          </h3>
          <h4>Account Number</h4>
          <Input
            placeholder="Account Number"
            onChange={e => this.setState({ acc_recive: e.target.value })}
          />
          <h4>Amount</h4>
          <Input
            placeholder="Amount"
            onChange={e => this.setState({ amount: e.target.value })}
          />
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {/* <Link
              to={{
                pathname: "/service/transfer/confirm",
                state: {
                  acc_send: this.state.accData[0].acc_number,
                  acc_recive: this.state.acc_recive,
                  amount: parseInt(this.state.amount)
                }
              }}
            > */}
            <Button type="primary" onClick={this.handleCheck}>
              Check
            </Button>
            {/* </Link> */}
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
