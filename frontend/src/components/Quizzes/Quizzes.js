// - List all the quizzes created by "current user" (faked data)
// - Infinite scroll loading
// - Sort by recenlty edited (might need changes on the data model)
// - Button to add a new quiz
// - Link to detail of the quiz
// - Just focus on the righ side of the screen (the black one)
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import NewQuizItem from "./components/NewQuizItem";
import QuizItem from "./components/QuizItem";

const Wrapper = styled.div`
  /* background-color: #1c2022; */
  display: "flex";
`;

// TIP: For seeing mocked quizzes go to the storybook of this component
const PureQuizzes = React.memo(({ quizzes, setQuizzes }) => {
  return (
    <Wrapper>
      <h1>Quizzes</h1>
      {/* TODO: Filter and Search */}
      <button>Search</button>
      <button>Sort</button>
      <div>
        <NewQuizItem />
        {Object.values(quizzes).map(quiz => (
          <QuizItem key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </Wrapper>
  );
});
PureQuizzes.propTypes = {
  quizzes: PropTypes.object,
  setQuizzes: PropTypes.func
};
export { PureQuizzes };

const Quizzes = () => {
  const [quizzes, setQuizzes] = React.useState({});
  return <PureQuizzes quizzes={quizzes} setQuizzes={setQuizzes} />;
};

export default Quizzes;
