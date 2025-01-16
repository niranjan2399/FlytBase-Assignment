import React from "react";
import PathInput from "./PathInput";
import UploadFile from "./UploadFile";
import PathDataTable from "./PathDataTable";

const SimulatorLeft = ({ data, setData }) => {
  return (
    <div className="simulator-left">
      <PathDataTable data={data} />
      <PathInput data={data} setData={setData} />
      <div>----------- or -----------</div>
      <UploadFile setData={setData} />
    </div>
  );
};

export default SimulatorLeft;
