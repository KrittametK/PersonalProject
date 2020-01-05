import React, { Component } from "react";
import {
  Button,
  Input,
  Row,
  Col,
  Icon,
  Layout,
  notification,
  Carousel
} from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";

let text = "";
const { Header, Content, Footer, Sider } = Layout;
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

function onChange(a, b, c) {
  console.log(a, b, c);
}
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      data: [],
      accountData: []
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
          Axios.post("http://localhost:8080/getAccountById", {
            id: this.state.data.id
          }).then(result => {
            this.setState({ accountData: result.data });
            text = "Welcome to e-Banking";
            openNotification("Login sucess", text);
            this.props.history.push("/service", {
              data: this.state.data,
              accData: this.state.accountData
            });
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
            <Carousel afterChange={onChange}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
            ,
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
