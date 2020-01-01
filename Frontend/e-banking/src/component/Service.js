import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import Home from "./Home";
import Account from "./Account";
import Transfer from "./Transfer";
import Coming from "./ComingSoon";
import Logout from "./Logout";
import { Route } from "react-router-dom";
import { Link, Switch } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

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
                <Link to="/service/account">
                  <Icon type="user" />
                  <span className="nav-text">My Account</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="3">
                <Link to="/service/transfer">
                  <Icon type="swap" />
                  <span className="nav-text">Transfer</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="4">
                <Link to="/service/coming">
                  <Icon type="question" />
                  <span className="nav-text">...</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="5">
                <Link to="/login">
                  <Icon type="unlock" />
                  <span className="nav-text">Log Out</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }} />
            <Content style={{ margin: "24px 16px 0" }}>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                <Switch>
                  <Route path="/service/home" component={Home} />
                  <Route path="/service/account" component={Account} />
                  <Route path="/service/transfer" component={Transfer} />
                  <Route path="/service/coming" component={Coming} />
                  <Route path="/service/logout" component={Logout} />
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
