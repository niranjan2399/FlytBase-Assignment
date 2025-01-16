import React, { useState } from "react";
import MapComponent from "../components/MapComponent";
import SimulatorLeft from "../components/SimulatorLeft";

const Simulator = () => {
  const [data, setData] = useState([]);

  return (
    <div className="simulator">
      <SimulatorLeft data={data} setData={setData} />
      <MapComponent data={data} />
    </div>
  );
};

export default Simulator;
