import React, { Component } from "react";
import classes from "./App.css";
import Header from "./Header/Header";
import { Plus, Minus, Refresh } from "./Controller/Controller";
import indexClasses from "./index.css";

class App extends Component {
  state = { count: 0 };

  plusClickHandler = () => {
    let count = this.state.count;
    count++;
    this.setState({
      count: count
    });
  };

  minusClickHandler = () => {
    let count = this.state.count;
    count--;
    this.setState({
      count: count
    });
  };

  refreshClickHandler = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div className={classes.App}>
        <Header />
        <div className={classes.container}>
          <textarea
            disabled
            className={classes["text-box"]}
            value={this.state.count}
            cols="20"
          />
          <div className={classes.controller}>
            <Minus minusClick={this.minusClickHandler} />
            <Refresh refClick={this.refreshClickHandler} />
            <Plus plusClick={this.plusClickHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
