import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import QuizItem from "./QuizItem";

storiesOf("QuizItem", module)
  .addDecorator(withKnobs)
  .add("With Submissions", () => (
    <QuizItem
      quiz={object("quiz", {
        id: 1,
        title: "Questions about React",
        total_submissions: 2
      })}
    />
  ))
  .add("Very long title", () => (
    <QuizItem
      quiz={object("quiz", {
        id: 1,
        title:
          "Questions about React with a very long long title to see what happens with overflow",
        total_submissions: 2
      })}
    />
  ))
  .add("Without submissions", () => (
    <QuizItem
      quiz={object("quiz", {
        id: 1,
        title: "Questions about React",
        total_submissions: 0
      })}
    />
  ))
  .add("Empty", () => <QuizItem quiz={object("quiz", {})} />);

// TODO: Add quizzes to force infinite loading
