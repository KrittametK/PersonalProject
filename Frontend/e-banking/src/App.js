import React from 'react'
import './App.css'
import First from "./component/First"
import Login from './component/Login'
import Register from './component/Register'
import Service from './component/Service'
import 'antd/dist/antd.css'
import { Route, Link, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = "/" component = {First} />
          <Route path = "/login" component = {Login} />
          <Route path = "/register" component = {Register} />
          <Route path = "/service" component = {Service} />
        </Switch>
      </div>
    )
  }
}

export default App;
