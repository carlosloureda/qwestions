import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, object } from "@storybook/addon-knobs/react";

import { PureAnswerType } from "./AnswerType";

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

storiesOf("PureAnswerType", module)
  .addDecorator(withKnobs)
  .add("'Code' Answer Type", () => (
    <PureAnswerType
      answerType={text("answerType", "code")}
      answers_inputs={object("answers_inputs", answers_inputs)}
      theme={text("theme", "monokai")}
      language={text("language", "mysql")}
      {...actions}
    />
  ))
  .add("'Multiple Choice' Answer Type", () => (
    <PureAnswerType
      answerType={text("answerType", "mutiple_choice")}
      answers_inputs={object("answers_inputs", answers_inputs)}
      theme={text("theme", "monokai")}
      language={text("language", "mysql")}
      {...actions}
    />
  ))
  .add("'Input' Answer Type", () => (
    <PureAnswerType
      answerType={text("answerType", "input")}
      answers_inputs={object("answers_inputs", answers_inputs)}
      theme={text("theme", "monokai")}
      language={text("language", "mysql")}
      {...actions}
    />
  ))
  .add("'Textarea' Answer Type", () => (
    <PureAnswerType
      answerType={text("answerType", "textarea")}
      answers_inputs={object("answers_inputs", answers_inputs)}
      theme={text("theme", "monokai")}
      language={text("language", "mysql")}
      {...actions}
    />
  ));
