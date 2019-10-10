import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { withKnobs, object } from "@storybook/addon-knobs/react";

import CodeAnswerType from "./CodeAnswerType";

export const task = {
  id: "1",
  title: "Tarea de test",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onLanguageChange: action("onLanguageChange"),
  onThemeChange: action("onThemeChange")
};

storiesOf("CodeAnswerType", module)
  //   .addDecorator(withKnobs)
  // .addDecorator(story => <QuestionProvider >{story()}</QuestionProvider>)
  .add("default", () => <CodeAnswerType {...actions} />)
  .add("theme (kuroir)", () => <CodeAnswerType {...actions} theme="kuroir" />)
  .add("coding language (javascript)", () => (
    <CodeAnswerType {...actions} language="javascript" />
  ))
  .add("theme & coding language", () => (
    <CodeAnswerType {...actions} theme="kuroir" language="javascript" />
  ));
