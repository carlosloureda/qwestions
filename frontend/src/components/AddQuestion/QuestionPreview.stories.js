import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import QuestionPreview from "./QuestionPreview";

export const actions = {
  saveAnswer: action("saveAnswer"),
  onChangeCode: action("onChangeCode"),
  showAnswerInputEditor: action("showAnswerInputEditor"),
  toggleAnswerInputValidity: action("toggleAnswerInputValidity"),
  deleteAnswer: action("deleteAnswer"),
  addNewAnswerLine: action("addNewAnswerLine"),
  onLanguageChange: action("onLanguageChange"),
  onThemeChange: action("onThemeChange"),
  handleAnswerTypeChange: action("handleAnswerTypeChange")
};

const answers_inputs = [
  { answer: "", isValid: false, saved: true, id: 1 },
  { answer: "", isValid: false, saved: true, id: 2 }
];

storiesOf("QuestionPreview", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <QuestionPreview
      answerType={object("answerType", "input")}
      question={object("question", "a = {b:'2'}")}
      theme={object("theme", "monokai")}
      codeLanguage={object("codeLanguage", "python")}
      answers_inputs={answers_inputs}
    />
  ));
