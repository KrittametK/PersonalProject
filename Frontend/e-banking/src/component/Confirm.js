import React, { Component } from 'react'
import { Card, Icon, Input, Button } from "antd";

export class Confirm extends Component {
  render() {
    return (
      <div style={{display: "flex"}}>
        <div style={{display: "flex", alignItems: "center"}}>
        <Icon type="caret-right" />
        </div>
        <Card title="Conclude" style={{ width: 300 }}>
            <p>Account Send</p>
            <Icon type="vertical-align-bottom" />
            <p>Account Recive</p>
            <hr/>
            <p>Amount</p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button type="primary">Confirm</Button>
            </div>
          </Card>  
      </div>
    )
  }
}

export default Confirm
