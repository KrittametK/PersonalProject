import React, { Component } from 'react'
import { Button } from "antd";
import { Link} from 'react-router-dom'

export class First extends Component {
  render() {
    return (
      <div>
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
          <h1>e-Banking</h1>
          <Link to="/login">
            <Button type="primary">Enter To This Site</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default First
