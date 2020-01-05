import React, { Component } from 'react'
import { Button } from "antd";
import { Link} from 'react-router-dom'

export class First extends Component {
  render() {
    return (
      <div style={{display: "flex", justifyContent: "center", height:"100vh",alignItems:"center", flexDirection: "column"}}>   
          <h1>e-Banking</h1>
          <Link to="/login">
            <Button type="primary">Enter to this site</Button>
          </Link>
      </div>
    )
  }
}

export default First
