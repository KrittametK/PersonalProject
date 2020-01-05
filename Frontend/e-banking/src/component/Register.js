import React, { Component } from "react";
import { Button, Result } from "antd";
import { Input } from "antd";
import { Row, Col } from "antd";
import { Layout, Icon } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios"

const { Header, Content, Footer, Sider } = Layout;

export class Register extends Component {
  constructor(props){
    super(props)
    this.state={
      name: "",
      lastname: "",
      username: "",
      password: "",
      acctype: "",
      accnumber: "",
      balance: ""
    }
  }

  handleRegister = () => {
    Axios.post("http://localhost:8080/createUser", {
      name: this.state.name,
      lastname: this.state.lastname,
      username: this.state.username,
      password: this.state.password,
      acc_type: this.state.acctype,
      acc_number: parseInt(this.state.accnumber),
      balance: parseInt(this.state.balance)
    }).then(result => {
      console.log(result)
      this.props.history.push("/login")
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={8}></Col>
          <Col
            span={8}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h2>
              Register
              <Icon type="save" />
            </h2>
            <div style={{ width: "50%" }}>
              <Icon type="edit" />
              <Input placeholder="First Name" onChange={e => this.setState({name: e.target.value})} />
              <Input placeholder="Last Name" onChange={e => this.setState({lastname: e.target.value})} />

              <Icon type="lock" />
              <Input placeholder="Username" onChange={e => this.setState({username: e.target.value})} />
              <Input.Password placeholder="Password" onChange={e => this.setState({password: e.target.value})} />
              <Input.Password placeholder="Confirm Password" />

              <Icon type="file-text" />
              <Input placeholder="Account Number" onChange={e => this.setState({acctype: e.target.value})} />
              <Input placeholder="Account Type" onChange={e => this.setState({accnumber: e.target.value})} />
              <Input placeholder="Balance" onChange={e => this.setState({balance: e.target.value})} />
              <hr />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
               
                  <Button type="primary" onClick={this.handleRegister}>Register</Button>
                
                <Link to="/login">
                  <Button type="primary">back</Button>
                </Link>
              </div>
            </div>
          </Col>
          <Col span={8}></Col>
        </Row>
        <br />
        <Footer style={{ textAlign: "center" }}>
        Copyright © 2019 Hufflepuff Thailand Co., Ltd.
        </Footer>
      </div>
    );
  }
}

export default Register;
