import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";

import NewQuizItem from "./NewQuizItem";

storiesOf("NewQuizItem", module)
  .addDecorator(withKnobs)
  //   .addDecorator(StoryRouter())
  .add("Default", () => <NewQuizItem />);
