import React, { Component } from "react";
import { Card, Icon, Button, notification } from "antd";
import Axios from "axios";

export class Confirm extends Component {
  openNotification = () => {
    notification.open({
      message: "Complete",
      description: "Transfer sucess.",
      style: {
        width: 600,
        marginLeft: 335 - 600
      }
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      acc_send: this.props.location.state.acc_send,
      acc_recive: this.props.location.state.acc_recive,
      amount: this.props.location.state.amount,
      balance_send: "",
      balance_recive: ""
    };
  }

  handleConfirm = () => {
    Axios.post("http://localhost:8080/transaction", {
      amount: this.state.amount,
      acc_send: this.state.acc_send,
      acc_recive: this.state.acc_recive
    })
      .then(result => {
        console.log(result);
        Axios.post("http://localhost:8080/getBalance", {
          acc_number: this.state.acc_send
        })
          .then(result => {
            this.setState({
              balance_send: result.data.balance - this.state.amount
            });
            Axios.post("http://localhost:8080/getBalance", {
              acc_number: this.state.acc_recive
            })
              .then(result => {
                this.setState({
                  balance_recive: result.data.balance + this.state.amount
                });
              })
              .then(result => {
                Axios.put("http://localhost:8080/updateBalance", {
                  balance_send: this.state.balance_send,
                  acc_send: this.state.acc_send,
                  balance_recive: this.state.balance_recive,
                  acc_recive: this.state.acc_recive
                }).then(result => {
                  this.openNotification();
                  console.log(result);
                  this.props.history.push("/service/transfer");
                });
              });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.acc_send);
    console.log(this.state.acc_recive);
    console.log(this.state.amount);
    return (
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Icon type="caret-right" />
        </div>
        <Card title="Conclude" style={{ width: 300 }}>
          <h4>From Account Number</h4>
          <p>{this.state.acc_send}</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Icon type="arrow-down" />
            <br />
            <br />
          </div>
          <h4>To Account Number</h4>
          <p>{this.state.acc_recive}</p>
          <hr />
          <h4>Amount</h4>
          <p>{this.state.amount}</p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="primary" onClick={this.handleConfirm}>
              Confirm
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Confirm;
