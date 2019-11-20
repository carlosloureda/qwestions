import React from "react";

import "./App.css";
import AddQuestion from "./components/AddQuestion/AddQuestion";
import { QuestionProvider } from "./components/Context";
import TestingPrisma from "./components/Testing/TestingPrisma";
// import CodeEditor2 from "./components/Editor/CodeEditor_2";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/quizzes/add">
        <h1>New Quiz Page</h1>
      </Route>
      <Route path="/quizzes/:quizId">
        <h1>Quiz detail page</h1>
      </Route>
      <Route path="/">
        <QuestionProvider>
          <TestingPrisma />
          <AddQuestion />
          {/* <CodeEditor2 /> */}
        </QuestionProvider>
      </Route>
    </Switch>
  );
};
function App() {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
