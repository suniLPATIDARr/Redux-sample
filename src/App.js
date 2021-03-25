import React, { Component } from "react";
import "./App.css";

//its a function that returns higer order compoent
import { connect } from "react-redux";
import logo from "./logo.svg";
import * as actionCreator from "./store/actions/actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="age">
            <h3> Your age: {this.props.age}</h3>
          </div>
          <button
            className="ageUp"
            style={{ background: "green" }}
            onClick={this.props.onAgeUp}
          >
            Age UP
          </button>
          <button
            className="ageDown"
            style={{ background: "red" }}
            onClick={this.props.onAgeDown}
          >
            Age Down
          </button>
          {this.props.loading && <img src={logo} className="App-logo" />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    loading: state.loading
  };
};

const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach(actionCreator.ageUp(1)),
    onAgeDown: () => dispach(actionCreator.ageDown(1)),
    onDelEntry: (id) => dispach({ type: "DEL_ENTRY", id: id }),
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
