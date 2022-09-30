import { useState, useEffect } from "react";
import { Remarkable } from "remarkable";
import { linkify } from "remarkable/linkify";

let md = new Remarkable().use(linkify);

export default function useMarkDownEditor() {
  const [rawText, setRawText] = useState("");
  function handleChangeRawInputedText(value) {
    setRawText(value);
  }

    useEffect(() => {
      getMarkDownAsHTMLOutput();
    }, [rawText, getMarkDownAsHTMLOutput]);

  function getMarkDownAsHTMLOutput() {
    return { __html: md.render(rawText) };
  }

  return [rawText, handleChangeRawInputedText, getMarkDownAsHTMLOutput];
}
