import React, { Component } from "react";
import "C:/Users/sizem/Documents/mathio/src/styles/problemSelectStyles.css";

class ProblemPannel extends Component {
  render() {
    const { problem } = this.props;
    return (
      <div className="panel">
        <div className="panelHeader">
          <div className="headerElement">
            <h1 className="problemTitle">{problem.title}</h1>
          </div>
          <div className="headerElement">
            <svg
              className="checkIcon"
              visibility={!problem.complete === true ? "hidden" : "visible"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
            </svg>
          </div>
        </div>
        <div className="problemPreview"></div>
      </div>
    );
  }
}

export default ProblemPannel;
