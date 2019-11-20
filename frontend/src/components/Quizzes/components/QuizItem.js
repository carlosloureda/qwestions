import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Submissions = ({ total }) => {
  return (
    <p>
      {total !== 0 && (
        <span role="img" aria-label="icon of a star">
          ⭐{" "}
        </span>
      )}
      {total !== 0 ? total : "NO"} submissions
    </p>
  );
};

const QuizzeItemWrapper = styled.div`
  width: 25%;
  height: 250px;
  min-width: 250px;
  background-color: #f0f0f0;
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /*align-content: space-between; */
`;

const Footer = styled.div`
  /* display: flex; */
  background-color: rgb(36, 40, 42);
  color: #f0f0f0;
  padding-left: 1em;
`;

const Header = styled.div`
  /* display: flex; */
  background-color: rgb(36, 40, 42);
  color: #f0f0f0;
  padding-left: 2em;
  & h1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
      overflow: visible;
      white-space: normal;
      height: auto;
    }
  }
`;

class QuizzeItem extends PureComponent {
  render() {
    const { quiz } = this.props;
    if (!quiz || !quiz.title) return null;
    return (
      <QuizzeItemWrapper>
        <Header>
          {/* TODO: Add overflow */}
          <h1>{quiz.title}</h1>
        </Header>
        {/* TODO: background overview*/}
        <Footer>
          <Submissions total={quiz.total_submissions} />
        </Footer>
      </QuizzeItemWrapper>
    );
  }
}
QuizzeItem.propTypes = {
  quiz: PropTypes.shape({
    title: PropTypes.string.isRequired,
    total_submissions: PropTypes.number.isRequired
  }).isRequired
};

export default QuizzeItem;
