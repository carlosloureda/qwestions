import React from "react";

import { ApolloProvider, Query, Mutation } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

// const QUESTIONS = gql`
//   {
//     posts {
//       title
//       content
//       author {
//         name
//       }
//     }
//   }
// `;

const CREATE_QUIZ = gql`
  mutation CreateQuiz($title: String!) {
    createQuiz(data: { title: $title }) {
      id
      title
    }
  }
`;

const CREATE_QUESTION = gql`
  mutation CreateQuestion($title: QuestionCreateInput!) {
    createQuestion(data: $title) {
      id
      title
    }
  }
`;

const client = new ApolloClient({
  uri: "https://eu1.prisma.sh/carlos-loureda-8b31b2/qwestion/dev"
});

const TestingPrisma = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Mutation
          mutation={CREATE_QUIZ}
          update={(cache, { data }) => {
            console.log("on update from Mutation");
            // this.setState({ user: data.createUser });
          }}
        >
          {createQuiz => (
            <button
              onClick={() =>
                createQuiz({ variables: { title: "Holas Burro" } })
              }
            >
              Create Quiz
            </button>
          )}
        </Mutation>
        {/* <Query query={POSTS}>
          {({ loading, error, data }) => {
            if (error) {
              return <div>Error :(</div>;
            }
            if (loading) {
              return <div>Loading...</div>;
            }
            return <Posts posts={data.posts} />;
          }}
        </Query> */}
      </div>
    </ApolloProvider>
  );
};

export default TestingPrisma;
