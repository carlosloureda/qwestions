const { Prisma } = require("prisma-binding");

const prisma = new Prisma({
  typeDefs: "./generated/prisma.graphql",
  endpoint: "https://eu1.prisma.sh/carlos-loureda-8b31b2/qwestion/dev"
});

// TODO: Remove all the items in the database ?
prisma.mutation
  .createQuiz({
    data: {
      title: "First Quizz"
    }
  })
  .then(response => {
    console.log("Response: ", response);
    quizId = response.id;
    prisma.mutation
      .createQuestion({
        data: {
          title: "Question 1",
          quiz: {
            connect: {
              id: quizId
            }
          }
        }
      })
      .then(response => {
        console.log("Question 1: ", response);
        prisma.mutation
          .createQuestion({
            data: {
              title: "Question 2",
              quiz: {
                connect: {
                  id: quizId
                }
              }
            }
          })
          .then(response => {
            console.log("Question 2: ", response);
            prisma.mutation
              .createQuestion({
                data: {
                  title: "Question 3",
                  quiz: {
                    connect: {
                      id: quizId
                    }
                  }
                }
              })
              .then(response => console.log("Question 3: ", response));
          });
      });
  });

// prisma.mutation
//   .createUser({ data: { name: "Alice" } }, "{ id name }")
//   .then(console.log)
//   // { id: 'cjhcidn31c88i0b62zp4tdemt', name: 'Alice' }
//   .then(() => prisma.query.users(null, "{ id name }"))
//   .then(response => {
//     console.log(response)
//     // [ { id: 'cjhcidn31c88i0b62zp4tdemt', name: 'Alice' } ]
//     return prisma.mutation.createPost({
//       data: {
//         title: "Prisma rocks!",
//         content: "Prisma rocks!",
//         author: {
//           connect: {
//             id: response[0].id
//           }
//         }
//       }
//     })
//   })
//   .then(response => {
//     console.log(response)
//     /*
//       { id: 'cjhcidoo5c8af0b62kv4dtv3c',
//         title: 'Prisma rocks!',
//         content: 'Prisma rocks!',
//         published: false }
//     */
//     return prisma.mutation.updatePost({
//       where: { id: response.id },
//       data: { published: true }
//     })
//   })
//   .then(console.log)
//   /*
//     { id: 'cjhcidoo5c8af0b62kv4dtv3c',
//       title: 'Prisma rocks!',
//       content: 'Prisma rocks!',
//       published: true }
//   */
//   .then(() => prisma.query.users(null, "{ id posts { title } }"))
//   .then(console.log)
//   // [ { id: 'cjhcidn31c88i0b62zp4tdemt', posts: [ [Object] ] } ]
//   .then(() => prisma.mutation.deleteManyPosts())
//   .then(console.log)
//   // { count: 1 }
//   .then(() => prisma.mutation.deleteManyUsers())
//   .then(console.log)
// { count: 1 }
