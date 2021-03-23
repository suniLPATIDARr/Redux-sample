import React, { Component } from "react";
import "./App.css";

//its a function that returns higer order compoent
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App" >
        <div className="header">
          <div className="age" >
          <h3> Your age: {this.props.age}</h3>
          </div>
          <button className="ageUp" style={{background:"green"}} onClick={this.props.onAgeUp}>
            Age UP
          </button>
          <button className="ageDown" style={{background:"red"}} onClick={this.props.onAgeDown}>
            Age Down
          </button>
        </div>
        <div style={{border:"2px solid red",padding:20,boxSizing:"border-box"}}><h1>History</h1>
        <div>
          <ul>
            {this.props.history.map(el => (
              <li 
                className="historyItem" 
                key={el.id}
                onClick={() => this.props.onDelEntry(el.id)}>
                {el.age}
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => { 
  return {
    age: state.age,
    history: state.history
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    onDelEntry: (id) => dispatch({ type: "DEL_ENTRY", id: id})
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
