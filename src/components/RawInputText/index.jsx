import React, { useContext } from "react";
import { markDownContext } from "../../context/markDownContext";

const RawInputText = () => {
  const { rawText, handleChangeRawInputedText } = useContext(markDownContext);
  return (
    <div className="">
      <h1 className="lg:text-3xl my-3 font-bold">Enter Markdown</h1>
      <textarea
        className="resize bg-[#E8E8E8]"
        onChange={(e) => handleChangeRawInputedText(e.target.value)}
        value={rawText}
      ></textarea>
    </div>
  );
};

export default RawInputText;
