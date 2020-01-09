import React, { Component } from "react";
import { Button, Input, Row, Col, Layout, Icon } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";

const { Header, Content, Footer, Sider } = Layout;

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      username: "",
      password: "",
      acctype: "",
      accnumber: "",
      balance: ""
    };
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
    })
      .then(result => {
        console.log(result);
        this.props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Layout style={{ height: "100vh" }}>
          <Header></Header>
          <Content style={{ backgroundColor: "white" }}>
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
                <br />
                <h2>
                  Register <Icon type="save" />
                </h2>
                <br />
                <br />
                <div style={{ width: "50vh" }}>
                  <Icon type="edit" />
                  <Input
                    placeholder="First Name"
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                  <Input
                    placeholder="Last Name"
                    onChange={e => this.setState({ lastname: e.target.value })}
                  />
                  <br />
                  <br />
                  <Icon type="lock" />
                  <Input
                    placeholder="Username"
                    onChange={e => this.setState({ username: e.target.value })}
                  />
                  <Input.Password
                    placeholder="Password"
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                  <Input.Password placeholder="Confirm Password" />
                  <br />
                  <br />

                  <Icon type="file-text" />
                  <Input
                    placeholder="Account Type"
                    onChange={e => this.setState({ acctype: e.target.value })}
                  />
                  <Input
                    placeholder="Account Number"
                    onChange={e =>
                      this.setState({ accnumber: parseInt(e.target.value) })
                    }
                  />
                  <Input
                    placeholder="Balance"
                    onChange={e =>
                      this.setState({ balance: parseInt(e.target.value) })
                    }
                  />
                  <hr />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button type="primary" onClick={this.handleRegister}>
                      Register
                    </Button>
                    <Link to="/login">
                      <Button type="primary">back</Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col span={8}></Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Copyright © 2019 Hufflepuff Thailand Co., Ltd.
          </Footer>
        </Layout>

        <br />
      </div>
    );
  }
}

export default Register;
