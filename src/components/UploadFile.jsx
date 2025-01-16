import moment from "moment";
import React, { useState } from "react";

function InputForm({ setData }) {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = JSON.parse(e.target.result);
        data.sort((a, b) => {
          return moment(a.time) - moment(b.time);
        });
        setData(data);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="upload-file">
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default InputForm;
