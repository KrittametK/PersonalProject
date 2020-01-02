import React, { Component } from "react";
import { Button } from "antd";
import { Input } from "antd";
import { Row, Col } from "antd";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

export class Register extends Component {
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
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />

              <Icon type="lock" />
              <Input placeholder="Username" />
              <Input.Password placeholder="Password" />
              <Input.Password placeholder="Confirm Password" />

              <Icon type="file-text" />
              <Input placeholder="Account Number" />
              <Input placeholder="Account Type" />
              <Input placeholder="Balance" />
              <hr />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Link to="/login">
                  <Button type="primary">Register</Button>
                </Link>
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
          สงวนลิขสิทธิ์ © 2562 บริษัท ฮัฟเฟิลพัพ (ประเทศไทย) จำกัด
        </Footer>
      </div>
    );
  }
}

export default Register;