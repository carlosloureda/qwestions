import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { PureAnswerType } from "./AnswerType";

export const task = {
  id: "1",
  title: "Tarea de test",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  //   onLanguageChange: action("onLanguageChange"),
  //   onThemeChange: action("onThemeChange")
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

storiesOf("PureAnswerType", module)
  .add("'Code' Answer Type", () => (
    <PureAnswerType
      answerType={"code"}
      answers_inputs={answers_inputs}
      theme={"monokai"}
      language={"mysql"}
      {...actions}
    />
  ))
  .add("'Multiple Choice' Answer Type", () => (
    <PureAnswerType
      answerType={"mutiple_choice"}
      answers_inputs={answers_inputs}
      theme={"monokai"}
      language={"mysql"}
      {...actions}
    />
  ))
  .add("'Input' Answer Type", () => (
    <PureAnswerType
      answerType={"input"}
      answers_inputs={answers_inputs}
      theme={"monokai"}
      language={"mysql"}
      {...actions}
    />
  ))
  .add("'Textarea' Answer Type", () => (
    <PureAnswerType
      answerType={"textarea"}
      answers_inputs={answers_inputs}
      theme={"monokai"}
      language={"mysql"}
      {...actions}
    />
  ));
//   .add("theme (kuroir)", () => <PureAnswerType {...actions} theme="kuroir" />)
//   .add("coding language (javascript)", () => (
//     <PureAnswerType {...actions} language="javascript" />
//   ))
//   .add("theme & coding language", () => (
//     <PureAnswerType {...actions} theme="kuroir" language="javascript" />
//   ));
