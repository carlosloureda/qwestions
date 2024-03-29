import React from "react";

import "./App.css";
import AddQuestion from "./components/AddQuestion/AddQuestion";
import { QuestionProvider } from "./components/Context";
import TestingPrisma from "./components/Testing/TestingPrisma";
// import CodeEditor2 from "./components/Editor/CodeEditor_2";

function App() {
  return (
    <div className="App">
      <QuestionProvider>
        <TestingPrisma />
        <AddQuestion />
        {/* <CodeEditor2 /> */}
      </QuestionProvider>
    </div>
  );
}

export default App;
