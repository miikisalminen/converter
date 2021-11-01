import "./App.css";
import { distCalc, wgtCalc, tempCalc } from "./calc";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Input states
      dist: "",
      wgt: "",
      temp: "",

      // Distance select-states
      dist1: "m",
      dist2: "m",

      // Weigth select-states
      wgt1: "g",
      wgt2: "g",

      // Temperature select-states
      temp1: "f",
      temp2: "f",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDist = this.handleDist.bind(this);
    this.handleWgt = this.handleWgt.bind(this);
    this.handleTemp = this.handleTemp.bind(this);
  }
  // Handles select-state changes
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  // Handles distance calculation
  handleDist(event) {
    const result = distCalc(
      this.state.dist1,
      this.state.dist2,
      event.target.value
    );
    this.setState({ [event.target.name]: result });
  }
  // Handles weigth calculation
  handleWgt(event) {
    const result = wgtCalc(
      this.state.wgt1,
      this.state.wgt2,
      event.target.value
    );
    this.setState({ [event.target.name]: result });
  }
  // Handles temperature calculation
  handleTemp(event) {
    const result = tempCalc(
      this.state.temp1,
      this.state.temp2,
      event.target.value
    );
    this.setState({ [event.target.name]: result });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Unit Conversion</h1>
        <div className="main-container">
          <div className="grid-container">
            <input
              type="number"
              placeholder="Distance"
              pattern="[0-9]*"
              onChange={this.handleDist}
              name="dist"
            />
            <select name="dist1" onChange={this.handleChange}>
              <option value="m">m</option>
              <option value="ft">ft</option>
              <option value="km">km</option>
              <option value="mi">mi</option>
            </select>
            <p>→</p>
            <input
              className="result"
              type="number"
              placeholder={this.state.dist}
              pattern="[0-9]*"
              disabled
            />
            <select name="dist2" onChange={this.handleChange}>
              <option value="m">m</option>
              <option value="ft">ft</option>
              <option value="km">km</option>
              <option value="mi">mi</option>
            </select>
            <button
              onClick={() => {
                navigator.clipboard.writeText(this.state.dist);
              }}
              title="Copy"
            ></button>
            <input
              type="number"
              placeholder="Weight"
              pattern="[0-9]*"
              onChange={this.handleWgt}
              name="wgt"
            />
            <select name="wgt1" onChange={this.handleChange}>
              <option>g</option>
              <option>kg</option>
              <option>lb</option>
            </select>
            <p>→</p>
            <input
              className="result"
              type="number"
              pattern="[0-9]*"
              disabled
              placeholder={this.state.wgt}
            />
            <select name="wgt2" onChange={this.handleChange}>
              <option>g</option>
              <option>kg</option>
              <option>lb</option>
            </select>
            <button
              onClick={() => {
                navigator.clipboard.writeText(this.state.dist);
              }}
              title="Copy"
            ></button>
            <input
              type="number"
              placeholder="Temperature"
              pattern="[0-9]*"
              onChange={this.handleTemp}
              name="temp"
            />
            <select name="temp1" onChange={this.handleChange}>
              <option value="f">F</option>
              <option value="c">C</option>
              <option value="k">K</option>
            </select>
            <p>→</p>
            <input
              className="result"
              type="number"
              pattern="[0-9]*"
              disabled
              placeholder={this.state.temp}
            />
            <select name="temp2" onChange={this.handleChange}>
              <option value="f">F</option>
              <option value="c">C</option>
              <option value="k">K</option>
            </select>
            <button
              onClick={() => {
                navigator.clipboard.writeText(this.state.dist);
              }}
              title="Copy"
            ></button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
