import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, object } from "@storybook/addon-knobs/react";

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
      answerType={text("answerType", "input")}
      question={text("question", "# Here the Markdown")}
      theme={text("theme", "monokai")}
      codeLanguage={text("codeLanguage", "python")}
      answers_inputs={object("answers_inputs", answers_inputs)}
    />
  ));
