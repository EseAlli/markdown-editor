import "./App.css";
import { markDownContext } from "./context/markDownContext";
import MarkdownSanitized from "./components/MarkdownSanitized";
import RawInputText from "./components/RawInputText";

function App() {
  return (
    <markDownContext.Provider value={"Hello"}>
      <div className="flex flex-wrap">
        <MarkdownSanitized />
        <RawInputText />
      </div>
    </markDownContext.Provider>
  );
}

export default App;
