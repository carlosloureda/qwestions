import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs/react";

import CodeAnswerType from "./CodeAnswerType";

export const actions = {
  onLanguageChange: action("onLanguageChange"),
  onThemeChange: action("onThemeChange")
};

// CodeAnswerType.propTypes = {
//   theme: PropTypes.string,
//   language: PropTypes.string,
//   onLanguageChange: PropTypes.func.isRequired,
//   onThemeChange: PropTypes.func.isRequired
// };


storiesOf("CodeAnswerType", module)
  .addDecorator(withKnobs)
  // .addDecorator(story => <QuestionProvider >{story()}</QuestionProvider>)
  .add("default", () => <CodeAnswerType {...actions} />)
  .add("theme (kuroir)", () => (
    <CodeAnswerType {...actions} theme={text("theme", "kuroir")} />
  ))
  .add("coding language (javascript)", () => (
    <CodeAnswerType {...actions} language={text("language", "javascript")} />
  ))
  .add("theme & coding language", () => (
    <CodeAnswerType
      {...actions}
      theme={text("theme", "kuroir")}
      language={text("language", "javascript")}
    />
  ));
