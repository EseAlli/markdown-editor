import React, { useContext } from "react";
import { markDownContext } from "../../context/markDownContext";

const MarkdownSanitized = () => {
  const { getMarkDownAsHTMLOutput } = useContext(markDownContext);
  console.log(getMarkDownAsHTMLOutput());
  return <div dangerouslySetInnerHTML={getMarkDownAsHTMLOutput()}></div>;
};

export default MarkdownSanitized;
