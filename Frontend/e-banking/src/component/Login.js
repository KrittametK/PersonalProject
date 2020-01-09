import React, { Component } from "react";
import { Button, Input, Row, Col, Icon, Layout, notification } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";

let text = "";
const { Header, Content, Footer } = Layout;

const openNotification = (messagerecive, descriptionrecive) => {
  notification.open({
    message: messagerecive,
    description: descriptionrecive,
    style: {
      width: 600,
      marginLeft: 335 - 600
    }
  });
};
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      data: []
    };
  }

  handleLogin = () => {
    Axios.post("http://localhost:8080/login", {
      username: this.state.username,
      password: this.state.password
    })
      .then(result => {
        if (result !== null && result.data !== "Login fail") {
          this.setState({ data: result.data });
          text = "Welcome to e-Banking";
          openNotification("Login sucess", text);
          this.props.history.push("/service", {
            data: this.state.data
          });
        } else if (result.data === "Login fail") {
          text = "username or password is incorrect";
          openNotification(result.data, text);
        }
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
          <Content
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white"
            }}
          >
            <Row>
              <Col
                span={24}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <h2>
                  Login
                  <Icon type="login" />
                </h2>
              </Col>
            </Row>
            <Row>
              <Col
                span={24}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <Row>
                    <Icon type="user" />
                    <Input
                      style={{ width: "100%" }}
                      placeholder="input username"
                      onChange={e =>
                        this.setState({ username: e.target.value })
                      }
                    />
                  </Row>
                  <br />
                  <Row>
                    <Icon type="unlock" />
                    <Input.Password
                      style={{ width: "100%" }}
                      placeholder="input password"
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </Row>
                  <br />
                  <Row
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Col>
                      <Link to="/register">
                        <Button type="primary">Sing Up</Button>
                      </Link>
                    </Col>
                    <Col>
                      <Button type="primary" onClick={this.handleLogin}>
                        Sign In
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Content>
          <Footer>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p>Copyright © 2019 Hufflepuff Thailand Co., Ltd.</p>
            </div>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default Login;
