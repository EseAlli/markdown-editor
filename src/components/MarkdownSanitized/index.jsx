import React, { useContext } from "react";
import { markDownContext } from "../../context/markDownContext";
import "./index.css";

const MarkdownSanitized = () => {
  const { getMarkDownAsHTMLOutput } = useContext(markDownContext);
  return (
    <div className="markdown-output">
      <h2>Markdown Output</h2>
      <div dangerouslySetInnerHTML={getMarkDownAsHTMLOutput()}></div>
    </div>
  );
};

export default MarkdownSanitized;
