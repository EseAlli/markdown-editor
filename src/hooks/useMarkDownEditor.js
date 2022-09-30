import { useState, useEffect, useCallback } from "react";
import { Remarkable } from "remarkable";
import { linkify } from "remarkable/linkify";

let md = new Remarkable().use(linkify);

md.set({
  html: true,
});

function getInitialText() {
  const text = localStorage.getItem("rawText");
  return text ? JSON.parse(text) : "# Hello World";
}

export default function useMarkDownEditor() {
  const [rawText, setRawText] = useState(getInitialText);
  function handleChangeRawInputedText(value) {
    setRawText(value);
  }

  const getMarkDownAsHTMLOutput = useCallback(() => {
    return { __html: md.render(rawText) };
  }, [rawText]);

  useEffect(() => {
    localStorage.setItem("rawText", JSON.stringify(rawText));
    getMarkDownAsHTMLOutput();
  }, [rawText, getMarkDownAsHTMLOutput]);

  return [rawText, handleChangeRawInputedText, getMarkDownAsHTMLOutput];
}
