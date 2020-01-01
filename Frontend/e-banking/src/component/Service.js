import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import Home from "./Home";
import { Route } from "react-router-dom";
import { Link, Switch } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const home = () => <Home />;

export class Service extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/service/home">
                  <Icon type="home" />
                  <span className="nav-text">HOME</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="user" />
                <span className="nav-text">My Account</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="swap" />
                <span className="nav-text">Transfer</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="question" />
                <span className="nav-text">...</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="unlock" />
                <span className="nav-text">Log Out</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }} />
            <Content style={{ margin: "24px 16px 0" }}>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                <Switch>
                  <Route path="/service/home" component={Home} />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              สงวนลิขสิทธิ์ © 2562 บริษัท ฮัฟเฟิลพัพ (ประเทศไทย) จำกัด
            </Footer>
          </Layout>
        </Layout>
        ,
      </div>
    );
  }
}

export default Service;
