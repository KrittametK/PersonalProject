import React, { Component } from "react";
import { Card, Button, Modal } from "antd";
import Axios from "axios";

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: this.props.location.state.userid,
      accdata: [],
      visible: false,
      transaction: []
    };
  }

  componentDidMount = () => {
    Axios.post("http://localhost:8080/getAccountById", {
      id: this.state.userid
    })
      .then(result => {
        this.setState({ accdata: result.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  showModal = acc_Number => () => {
    Axios.post("http://localhost:8080/getTransaction", {
      acc_number: acc_Number
    })
      .then(result => {
        this.setState({ transaction: result.data });
        this.setState({ visible: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {this.state.accdata.map(acc => (
          <Card title="Account Name" style={{ width: 300 }}>
            <p>{acc.acc_type} account</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Account Number</p>
              <p>{acc.acc_number}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Balance</p>
              <p>{acc.balance}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="primary" onClick={this.showModal(acc.acc_number)}>
                View transaction
              </Button>
              <Modal
                title="Transaction"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                {this.state.transaction.map(trans => (
                  <div style={{ display: "flex" }}>
                    <p>{"[" + trans.trans_type + "]---"}</p>
                    <p>
                      {trans.amount}
                      {"Bath"}
                    </p>
                    <p>{"---" + trans.createdAt.substring(0, 10)} </p>
                  </div>
                ))}
              </Modal>
            </div>
          </Card>
        ))}
      </div>
    );
  }
}

export default Account;
