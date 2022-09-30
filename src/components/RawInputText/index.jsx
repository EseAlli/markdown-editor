import React, { useContext } from "react";
import { markDownContext } from "../../context/markDownContext";
import "./index.css";
const RawInputText = () => {
  const { rawText, handleChangeRawInputedText } = useContext(markDownContext);
  return (
    <div className="raw-input">
      <h1>Enter Markdown</h1>
      <textarea
        onChange={(e) => handleChangeRawInputedText(e.target.value)}
        value={rawText}
      ></textarea>
    </div>
  );
};

export default RawInputText;
