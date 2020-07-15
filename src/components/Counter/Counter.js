import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  state = {
    count: 10,
  };

  plus = async () => {
    await this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    console.log("new state", this.state);
  };

  minus = () => {
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div className={classes.Container}>
        <h1>Counter</h1>
        <div className={classes.Count}>{this.state.count}</div>
        <div>
          <button onClick={this.minus}>-</button>
          <button onClick={this.reset}>0</button>
          <button onClick={this.plus}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;
