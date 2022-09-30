import { useState, useEffect, useCallback } from "react";
import { Remarkable } from "remarkable";
import { linkify } from "remarkable/linkify";

let md = new Remarkable().use(linkify);

export default function useMarkDownEditor() {
  const [rawText, setRawText] = useState("");
  function handleChangeRawInputedText(value) {
    setRawText(value);
  }

  const getMarkDownAsHTMLOutput = useCallback(() => {
    return { __html: md.render(rawText) };
  }, [rawText]);

  useEffect(() => {
    getMarkDownAsHTMLOutput();
  }, [rawText, getMarkDownAsHTMLOutput]);

  return [rawText, handleChangeRawInputedText, getMarkDownAsHTMLOutput];
}
