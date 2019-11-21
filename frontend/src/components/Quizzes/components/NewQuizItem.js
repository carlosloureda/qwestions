import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const QuizzeItemWrapper = styled.div`
  width: 25%;
  height: 240px;
  min-width: 230px;
  max-width: 230px;
  background-color: lightgray;
  margin-left: 10px;
  margin-bottom: 10px;
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
