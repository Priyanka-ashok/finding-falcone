import React, { Component } from "react";
import "./button.scss";

export class Button extends Component {
  render() {
    return (
      <div className="button">
        <button className="btn" id="home-btn">
          Find Falcone
        </button>
        <button className="btn">Go back to Home</button>
      </div>
    );
  }
}

export class ButtonComponent extends Component {
  render() {
    return (
      <div className="top-buttons">
        <button className="btn" id="home-btn">
          Time Taken{" "}
        </button>
        <button className="btn" id="reset">
          Reset
        </button>
      </div>
    );
  }
}
