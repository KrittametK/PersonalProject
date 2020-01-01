import React, { Component } from "react";
import { Button } from "antd";
import { Input } from "antd";
import { Row, Col } from "antd";
import { Icon } from "antd";
import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;

export class Login extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <h2>
              Login
              <Icon type="login" />
            </h2>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <Row>
                <Icon type="user" />
                <Input style={{ width: "100%" }} placeholder="input username" />
              </Row>
              <br />
              <Row>
                <Icon type="unlock" />
                <Input.Password
                  style={{ width: "100%" }}
                  placeholder="input password"
                />
              </Row>
              <br />
              <Row style={{ display: "flex", justifyContent: "space-between" }}>
                <Col>
                  <Button type="primary">Register</Button>
                </Col>
                <Col>
                  <Button type="primary">Sign up</Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <br />
        <Footer style={{ textAlign: "center" }}>
          สงวนลิขสิทธิ์ © 2562 บริษัท ฮัฟเฟิลพัพ (ประเทศไทย) จำกัด
        </Footer>
      </div>
    );
  }
}

export default Login;
