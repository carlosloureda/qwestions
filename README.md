# Qwestions

Website based on React and GraphQL for writing questions & answers for learning/interviewing purposes

## WIP

## PRISMA

Deployed to a demo server in prisma an PostgressDatabase based on the [schema](prisma/datamodel.prisma).

Can open the background with `prisma playground`

```

mutation {
  createQuiz(data: {
    title: "quiz number one"
  }) {
    id,
    title
  }
}

```
