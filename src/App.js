import React from "react";

import "./App.css";
import AddQuestion from "./components/AddQuestion/AddQuestion";
import { QuestionProvider } from "./components/Context";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <QuestionProvider>
        <AddQuestion />
      </QuestionProvider>
    </div>
  );
}

export default App;
