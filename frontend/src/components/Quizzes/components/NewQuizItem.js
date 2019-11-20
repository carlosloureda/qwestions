import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const QuizzeItemWrapper = styled.div`
  width: 25%;
  height: 250px;
  min-width: 250px;
  background-color: lightgray;
  /* margin: 5%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid blue;
  &:hover {
    background-color: lightblue;
    border: 5px solid lightgray;
    cursor: pointer;
  }
`;

const NewQuizItem = () => {
  return (
    <Link to="/quizzes/add">
      <QuizzeItemWrapper>
        <IconContext.Provider value={{ color: "blue", size: "6em" }}>
          <FaPlus />
        </IconContext.Provider>
      </QuizzeItemWrapper>
    </Link>
  );
};

export default NewQuizItem;
