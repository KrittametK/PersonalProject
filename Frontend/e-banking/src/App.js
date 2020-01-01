import React from 'react'
import './App.css'
import Login from './component/Login'
import Register from './component/Register'
import Service from './component/Service'
import 'antd/dist/antd.css'
import { Route } from 'react-router-dom'


const login = () => <Login />
const registre = () => <Register />
const service = () => <Service />
class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <div style={{display: "flex", justifyContent: "center"}}>
          <h1>e-Banking</h1>
        </div>
        
        <Route path = "/login" component = {login} />
        <Route path = "/register" component = {registre} />
        <Route path = "/service" component = {service} />

      </div>
    )
  }
}

export default App;
