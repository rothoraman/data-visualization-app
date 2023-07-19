import React, { useState } from "react";
import Flavanoids from "./components/Flavanoids";
import Gamma from "./components/Gamma";

const App = () => {
  const [isFlavanoids, setIsFlavanoids] = useState(false);
  const [isGamma, setIsGamma] = useState(false);

  const ShowFlavanoids = () => {
    setIsFlavanoids(!isFlavanoids);
  };
  const ShowGamma = () => {
    setIsGamma(!isGamma);
  };
  return (
    <div style={{ display: "grid" }}>
      <div>
        <h2 style={{ display: "inline" }}>
          Click for Flavanoids Calculation:{" "}
        </h2>
        <button style={{ marginLeft: "10px" }} onClick={ShowFlavanoids}>
          Flavanoids
        </button>
        {isFlavanoids && <Flavanoids />}
      </div>
      <div>
        <h2 style={{ display: "inline" }}>Click for Gamma Calculation: </h2>
        <button style={{ marginLeft: "10px" }} onClick={ShowGamma}>
          Flavanoids
        </button>
        {isGamma && <Gamma />}
      </div>
    </div>
  );
};

export default App;
