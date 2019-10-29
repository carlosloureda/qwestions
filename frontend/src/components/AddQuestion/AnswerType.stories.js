import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, object } from "@storybook/addon-knobs/react";

import AnswerType from "./AnswerType";

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

storiesOf("AnswerType", module)
  .addDecorator(withKnobs)
  .add("'Default' Answer Type", () => (
    <AnswerType
      answerType={text("answerType", undefined)}
      answers_inputs={object("answers_inputs", answers_inputs)}
      theme={text("theme", undefined)}
      language={text("language", undefined)}
      {...actions}
    />
  ))
  .add("'Code' Answer Type", () => (
    <AnswerType
      answerType={text("answerType", "code")}
      answers_inputs={object("answers_inputs", answers_inputs)}
      theme={text("theme", "monokai")}
      language={text("language", "mysql")}
      {...actions}
    />
  ))
  .add("'Multiple Choice' Answer Type", () => (
    <AnswerType
      answerType={text("answerType", "mutiple_choice")}
      answers_inputs={object("answers_inputs", answers_inputs)}
      theme={text("theme", "monokai")}
      language={text("language", "mysql")}
      {...actions}
    />
  ))
  .add("'Input' Answer Type", () => (
    <AnswerType
      answerType={text("answerType", "input")}
      answers_inputs={object("answers_inputs", answers_inputs)}
      theme={text("theme", "monokai")}
      language={text("language", "mysql")}
      {...actions}
    />
  ))
  .add("'Textarea' Answer Type", () => (
    <AnswerType
      answerType={text("answerType", "textarea")}
      answers_inputs={object("answers_inputs", answers_inputs)}
      theme={text("theme", "monokai")}
      language={text("language", "mysql")}
      {...actions}
    />
  ));
