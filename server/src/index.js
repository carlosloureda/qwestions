const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");

const resolvers = {
  Query: {
    user: (_, args, context, info) => {
      return context.prisma.query.user(
        {
          where: {
            id: args.id
          }
        },
        info
      );
    },
    question: (_, args, context, info) => {
      return context.prisma.query.question(
        {
          where: {
            id: args.id
          }
        },
        info
      );
    },
    quiz: (_, args, context, info) => {
      return context.prisma.query.quiz(
        {
          where: {
            id: args.id
          }
        },
        info
      );
    },
    answer: (_, args, context, info) => {
      return context.prisma.query.answer(
        {
          where: {
            id: args.id
          }
        },
        info
      );
    },
    submission: (_, args, context, info) => {
      return context.prisma.query.submission(
        {
          where: {
            id: args.id
          }
        },
        info
      );
    },
    quizzes: (_, args, context, info) => {
      return context.prisma.query.quizzes({}, info);
    },
    questions: (_, args, context, info) => {
      return context.prisma.query.questions({}, info);
    }
  },
  Mutation: {
    createQuiz: (_, args, context, info) => {
      return context.prisma.mutation.createQuiz(
        {
          data: {
            title: args.title
          }
        },
        info
      );
    },
    createQuestion: (_, args, context, info) => {
      return context.prisma.mutation.createQuestion(
        {
          data: {
            title: args.title,
            // right_answer: args.right_answer,
            answer_type: args.answer_type,
            theme: args.theme
          }
        },
        info
      );
    }
    // createAnswer: (_, args, context, info) => {
    //   return context.prisma.mutation.createAnswer(
    //     {
    //       data: {
    //         answer: args.answer,
    //         quiz: args.quiz,
    //         user: args.user,
    //         question: args.question
    //       }
    //     },
    //     info
    //   );
    // }
  }
};

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint: "https://eu1.prisma.sh/carlos-loureda-8b31b2/qwestion/dev"
    })
  })
});
server.start(() =>
  console.log(`GraphQL server is running on http://localhost:4000`)
);
