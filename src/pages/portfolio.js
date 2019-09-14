import React, { Component } from "react"
import Layout from "../components/layout"
import Header from "../examples/Header"

export default class portfolio extends Component {
  render() {
    return (
      <Layout>
        <h1>Hello from portfolio.js</h1>
        <Header />
      </Layout>
    )
  }
}
