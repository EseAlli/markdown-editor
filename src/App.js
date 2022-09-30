import "./App.css";
import { markDownContext } from "./context/markDownContext";
import MarkdownSanitized from "./components/MarkdownSanitized";
import RawInputText from "./components/RawInputText";
import useMarkDownEditor from "./hooks/useMarkDownEditor";
import FlexLayout from "./components/FlexLayout";

function App() {
  const [rawText, handleChangeRawInputedText, getMarkDownAsHTMLOutput] =
    useMarkDownEditor();
  return (
    <markDownContext.Provider
      value={{ rawText, handleChangeRawInputedText, getMarkDownAsHTMLOutput }}
    >
      <div className="container mx-auto">
        <FlexLayout>
          <RawInputText />
          <MarkdownSanitized />
        </FlexLayout>
      </div>
    </markDownContext.Provider>
  );
}

export default App;
