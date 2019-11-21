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

const S = {};

S.Wrapper = styled.div`
  background-color: #1c2022;
`;
S.QuizzList = styled.div`
  /* background-color: #1c2022; */
  display: flex;
  flex-direction: row;
  /* background-color: red; */
  /* justify-content: space-around; */
  flex-wrap: wrap;
  padding: 2%;
  margin: 1px auto;
`;

// TIP: For seeing mocked quizzes go to the storybook of this component
const PureQuizzes = React.memo(({ quizzes, setQuizzes }) => {
  return (
    <S.Wrapper>
      <h1>Quizzes</h1>
      {/* TODO: Filter and Search */}
      <button>Search</button>
      <button>Sort</button>
      <S.QuizzList>
        <NewQuizItem />
        {Object.values(quizzes).map(quiz => (
          <QuizItem key={quiz.id} quiz={quiz} />
        ))}
      </S.QuizzList>
    </S.Wrapper>
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
