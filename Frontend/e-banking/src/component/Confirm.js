import React, { Component } from "react";
import { Card, Icon, Button } from "antd";
import Axios from "axios";

export class Confirm extends Component {
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
                  console.log(result);
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
          <p>{this.state.acc_send}</p>
          <Icon type="vertical-align-bottom" />
          <p>{this.state.acc_recive}</p>
          <hr />
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
