import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import CodeAnswerType from "./CodeAnswerType";

export const actions = {
  onLanguageChange: action("onLanguageChange"),
  onThemeChange: action("onThemeChange")
};

storiesOf("CodeAnswerType", module)
  .addDecorator(withKnobs)
  // .addDecorator(story => <QuestionProvider >{story()}</QuestionProvider>)
  .add("default", () => <CodeAnswerType {...actions} />)
  .add("theme (kuroir)", () => (
    <CodeAnswerType {...actions} theme={object("theme", "kuroir")} />
  ))
  .add("coding language (javascript)", () => (
    <CodeAnswerType {...actions} language={object("language", "javascript")} />
  ))
  .add("theme & coding language", () => (
    <CodeAnswerType
      {...actions}
      theme={object("theme", "kuroir")}
      language={object("language", "javascript")}
    />
  ));
