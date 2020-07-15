import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = (type) => {
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);
    return stateValues.reduce((acc, item) => acc + item, 0);

    // const { good, neutral, bad } = this.state;
    // return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const percentageCounter =
      (this.state.good * 100) / this.countTotalFeedback();

    return this.state.good > 0 ? percentageCounter.toFixed(0) : this.state.good;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={() => this.updateState("good")}>
            Good
          </button>
          <button type="button" onClick={() => this.updateState("neutral")}>
            Neutral
          </button>
          <button type="button" onClick={() => this.updateState("bad")}>
            Bad
          </button>
        </div>

        <h2>Statistics</h2>
        <ul>
          {this.countPositiveFeedbackPercentage() === 0 ? (
            <li>No feedback given</li>
          ) : (
            <>
              <li>Good: {good}</li>
              <li>Neutral: {neutral}</li>
              <li>Bad: {bad}</li>
              <li>Total: {this.countTotalFeedback()}</li>
              <li>
                Positive feedback: {this.countPositiveFeedbackPercentage()}%
              </li>
            </>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
