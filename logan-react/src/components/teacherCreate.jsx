import React, { Component } from "react";
import { Helmet } from "react-helmet";

class TeacherCreate extends Component {
  backgroundStyle = `background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%233185fc'/%3E%3Cstop offset='1' stop-color='%230aa286'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23e05263'/%3E%3Cstop offset='1' stop-color='%23eeb868'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;`;
  render() {
    return (
      <section className="teacher-form-page">
        <Helmet bodyAttributes={{ style: this.backgroundStyle }} />
        <div className="teacher-form-format">
          <form className="teacher-create-form">
            <span className="teacher-create-heading">
              Create Your Math Problem
            </span>
            <label className="teacher-input-label">Question Name</label>
            <div className="teacher-input-area">
              <input
                className="teacher-input"
                type="text"
                placeholder="Problem Name"
              />
            </div>
            <label className="teacher-input-label">Question Type</label>
            <div className="teacher-input-area">
              <input
                className="teacher-input"
                type="text"
                placeholder="Problem Type"
              />
            </div>
            <label className="teacher-input-label">Question Weight</label>
            <div className="teacher-input-area">
              <input
                className="teacher-input"
                type="text"
                placeholder="Question Weight"
              />
            </div>
            <label className="teacher-input-label">Math Problem*</label>
            <div className="teacher-input-area full-input-area">
              <textarea
                className="teacher-input"
                placeholder="Enter your math problem."
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="submit-button-container">
              <button className="submit-button">
                <span className="submit-button-span"><p className="submit-button-text">Publish</p>{this.renderArrow()}</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }

  renderArrow = () => {
    return (
      <svg
        className="arrow-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
      </svg>
    );
  };
}

export default TeacherCreate;
