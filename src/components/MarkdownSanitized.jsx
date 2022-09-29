import React, { useContext } from "react";
import { markDownContext } from "../context/markDownContext";

const MarkdownSanitized = () => {
  console.log(useContext(markDownContext));
  return (
    <div>
      <div></div>
    </div>
  );
};

export default MarkdownSanitized;
