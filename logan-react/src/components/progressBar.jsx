import React from "react";
import "../styles/progressBar.css";

const ProgressBar = ({ problems }) => {
  const problemsComplete = problems.filter(
    (problem) => problem.complete === true
  ).length;
  const percentDone = `${
    ((problemsComplete - 1) / (problems.length - 1)) * 100
  }%`;
  const problemsCopy = [...problems];

  return (
    <div className="progress">
      <div className="progress-track">
        <div className="complete-track" style={{ width: percentDone }}></div>
      </div>
      {problemsCopy.reverse().map((problem) =>
        problem.complete === true ? (
          <div key={problem.id} className="progress-step active-step">
            <svg
              className="complete-icon"
              visibility="visible"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 26"
              width="26"
              height="26"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
            </svg>
          </div>
        ) : (
          <div key={problem.id} className="progress-step incomplete-step" />
        )
      )}
    </div>
  );
};

export default ProgressBar;
