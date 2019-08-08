import React, { Component } from "react";
// import API from "./utils/API";
import "./App.css";

export default class App extends Component {

  state = {
    count: 0,
  }

  increment = () => {
    // 1. get <select> option
    const number = this.select.value * 1
    // 注意!!! value*1 是因为 value 是一个 string,
    // 要想让它做 count, 必须是 int 或 float,
    // 所以让它 *1, JavaScript 会把 string 变成 int
    // when string 和 int 两种 type 做加减乘除时.
    // 相当于, parseInt(this.select.value) 的捷径.

    // 2. get count state
    const count = this.state.count
    // 3. set new count state
    this.setState({ count: count + number })
  }
  decrement = () => {
    const number = this.select.value * 1
    const count = this.state.count
    this.setState({ count: count - number })
  }
  incrementIfOdd = () => {
    const number = this.select.value * 1
    const count = this.state.count
    if (count % 2 === 1) {
      this.setState({ count: count + number })
    }
  }
  incrementAsync = () => {
    const number = this.select.value * 1
    const count = this.state.count
    setTimeout(() => {
      this.setState({ count: count + number })
    }, 1000)
  }

  render() {
    // const { count } = this.state
    return (
      <div>
        <p>clicked {this.state.count} time(s)</p>
        <div>
          <select ref={(select => this.select = select)}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
          <button onClick={this.incrementAsync}>increment async</button>
        </div>
      </div>
    );
  }
}