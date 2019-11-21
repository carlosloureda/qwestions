import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import { PureQuizzes } from "./Quizzes";

export const quizzes_mocked = {
  1: {
    id: 1,
    title: "Questions about React",
    // TODO: total_submissions doesn't exist yet on the model
    total_submissions: 2
    // TODO: preview background with Q1 or Q2 ....
  },
  2: {
    id: 2,
    title: "Redux Exam",
    total_submissions: 4
  },
  3: {
    id: 3,
    title: "Hooks Quiz",
    total_submissions: 4
  },
  4: {
    id: 4,
    title: "Testing Questions",
    total_submissions: 4
  },
  5: {
    id: 5,
    title: "Final Exam",
    total_submissions: 5
  },
  6: {
    id: 6,
    title: "Hooks Quiz",
    total_submissions: 4
  },
  7: {
    id: 7,
    title: "Testing Questions",
    total_submissions: 4
  }
  // 8: {
  //   id: 8,
  //   title: "Final Exam",
  //   total_submissions: 5
  // }
};

storiesOf("Quizzes", module)
  .addDecorator(withKnobs)
  .add("Empty", () => <PureQuizzes quizzes={object("quizzes", {})} />)
  .add("With 5 Quizzes", () => {
    //   Wrapper idea tooked from https://levelup.gitconnected.com/adding-state-to-storybook-in-react-c6744fda25b4
    function Wrapper({ children, ...props }) {
      const [quizzes, setQuizzes] = React.useState(quizzes_mocked);
      return <div>{children(quizzes, setQuizzes)}</div>;
    }
    return (
      <Wrapper>
        {(quizzes, setQuizzes) => (
          <PureQuizzes
            quizzes={object("quizzes", quizzes)}
            setQuizzes={setQuizzes}
          />
        )}
      </Wrapper>
    );
  });

// TODO: Add quizzes to force infinite loading
