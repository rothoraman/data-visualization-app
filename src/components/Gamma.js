import React, { useState } from "react";
import {
  calculateMeanOfGamma,
  calculateMedianOfGamma,
  calculateModeOfGamma,
} from "../helpers/GammaCalc";
const Gamma = () => {
  const [mean, setMean] = useState();
  const [median, setMedian] = useState();
  const [mode, setMode] = useState();

  const meanHandler = () => {
    const meanValues = [];
    for (let alcoholValue = 1; alcoholValue <= 3; alcoholValue++) {
      const meanValue = calculateMeanOfGamma(alcoholValue);
      meanValues.push(meanValue);
    }
    setMean(meanValues);
  };

  const medianHandler = () => {
    const medianValues = [];
    for (let alcoholValue = 1; alcoholValue <= 3; alcoholValue++) {
      const medianValue = calculateMedianOfGamma(alcoholValue);
      medianValues.push(medianValue);
    }
    setMedian(medianValues);
  };

  const modeHandler = () => {
    const modeValues = [];
    for (let alcoholValue = 1; alcoholValue <= 3; alcoholValue++) {
      const modeValue = calculateModeOfGamma(alcoholValue);
      modeValues.push(modeValue);
    }
    setMode(modeValues);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            <th>Alcohol 1</th>
            <th>Alcohol 2</th>
            <th>Alcohol 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              Gamma
              <button
                onClick={() => meanHandler()}
                style={{ marginLeft: "10px", display: "block" }}
              >
                Mean
              </button>
            </th>
            <td>{mean ? mean[0] : ""}</td>
            <td>{mean ? mean[1] : ""}</td>
            <td>{mean ? mean[2] : ""}</td>
          </tr>
          <tr>
            <th>
              Gamma{" "}
              <button
                onClick={() => medianHandler()}
                style={{ marginLeft: "10px", display: "block" }}
              >
                Median
              </button>
            </th>
            <td>{median ? median[0] : ""}</td>
            <td>{median ? median[1] : ""}</td>
            <td>{median ? median[2] : ""}</td>
          </tr>
          <tr>
            <th>
              Gamma{" "}
              <button
                onClick={() => modeHandler()}
                style={{ marginLeft: "10px", display: "block" }}
              >
                Mode
              </button>
            </th>
            <td>{mode ? mode[0] : ""}</td>
            <td>{mode ? mode[1] : ""}</td>
            <td>{mode ? mode[2] : ""}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Gamma;
