import React from "react";
import { storiesOf } from "@storybook/react";
import AddQuestion from "./AddQuestion";
import { QuestionProvider } from "../Context";

storiesOf("AddQuestion", module)
  .addDecorator(story => <QuestionProvider>{story()}</QuestionProvider>)
  .add("Default", () => <AddQuestion />);
