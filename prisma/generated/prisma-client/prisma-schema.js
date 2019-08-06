module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateAnswer {
  count: Int!
}

type AggregateQuestion {
  count: Int!
}

type AggregateQuiz {
  count: Int!
}

type AggregateSubmission {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Answer {
  id: ID!
  quiz(where: QuizWhereInput, orderBy: QuizOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Quiz!]
  user(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  question(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Question!]
  answer: [String!]!
  is_valid: Boolean
}

type AnswerConnection {
  pageInfo: PageInfo!
  edges: [AnswerEdge]!
  aggregate: AggregateAnswer!
}

input AnswerCreateanswerInput {
  set: [String!]
}

input AnswerCreateInput {
  id: ID
  quiz: QuizCreateManyInput
  user: UserCreateManyInput
  question: QuestionCreateManyInput
  answer: AnswerCreateanswerInput
  is_valid: Boolean
}

type AnswerEdge {
  node: Answer!
  cursor: String!
}

enum AnswerOrderByInput {
  id_ASC
  id_DESC
  is_valid_ASC
  is_valid_DESC
}

type AnswerPreviousValues {
  id: ID!
  answer: [String!]!
  is_valid: Boolean
}

type AnswerSubscriptionPayload {
  mutation: MutationType!
  node: Answer
  updatedFields: [String!]
  previousValues: AnswerPreviousValues
}

input AnswerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AnswerWhereInput
  AND: [AnswerSubscriptionWhereInput!]
  OR: [AnswerSubscriptionWhereInput!]
  NOT: [AnswerSubscriptionWhereInput!]
}

input AnswerUpdateanswerInput {
  set: [String!]
}

input AnswerUpdateInput {
  quiz: QuizUpdateManyInput
  user: UserUpdateManyInput
  question: QuestionUpdateManyInput
  answer: AnswerUpdateanswerInput
  is_valid: Boolean
}

input AnswerUpdateManyMutationInput {
  answer: AnswerUpdateanswerInput
  is_valid: Boolean
}

input AnswerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quiz_every: QuizWhereInput
  quiz_some: QuizWhereInput
  quiz_none: QuizWhereInput
  user_every: UserWhereInput
  user_some: UserWhereInput
  user_none: UserWhereInput
  question_every: QuestionWhereInput
  question_some: QuestionWhereInput
  question_none: QuestionWhereInput
  is_valid: Boolean
  is_valid_not: Boolean
  AND: [AnswerWhereInput!]
  OR: [AnswerWhereInput!]
  NOT: [AnswerWhereInput!]
}

input AnswerWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createAnswer(data: AnswerCreateInput!): Answer!
  updateAnswer(data: AnswerUpdateInput!, where: AnswerWhereUniqueInput!): Answer
  updateManyAnswers(data: AnswerUpdateManyMutationInput!, where: AnswerWhereInput): BatchPayload!
  upsertAnswer(where: AnswerWhereUniqueInput!, create: AnswerCreateInput!, update: AnswerUpdateInput!): Answer!
  deleteAnswer(where: AnswerWhereUniqueInput!): Answer
  deleteManyAnswers(where: AnswerWhereInput): BatchPayload!
  createQuestion(data: QuestionCreateInput!): Question!
  updateQuestion(data: QuestionUpdateInput!, where: QuestionWhereUniqueInput!): Question
  updateManyQuestions(data: QuestionUpdateManyMutationInput!, where: QuestionWhereInput): BatchPayload!
  upsertQuestion(where: QuestionWhereUniqueInput!, create: QuestionCreateInput!, update: QuestionUpdateInput!): Question!
  deleteQuestion(where: QuestionWhereUniqueInput!): Question
  deleteManyQuestions(where: QuestionWhereInput): BatchPayload!
  createQuiz(data: QuizCreateInput!): Quiz!
  updateQuiz(data: QuizUpdateInput!, where: QuizWhereUniqueInput!): Quiz
  updateManyQuizzes(data: QuizUpdateManyMutationInput!, where: QuizWhereInput): BatchPayload!
  upsertQuiz(where: QuizWhereUniqueInput!, create: QuizCreateInput!, update: QuizUpdateInput!): Quiz!
  deleteQuiz(where: QuizWhereUniqueInput!): Quiz
  deleteManyQuizzes(where: QuizWhereInput): BatchPayload!
  createSubmission(data: SubmissionCreateInput!): Submission!
  updateSubmission(data: SubmissionUpdateInput!, where: SubmissionWhereUniqueInput!): Submission
  upsertSubmission(where: SubmissionWhereUniqueInput!, create: SubmissionCreateInput!, update: SubmissionUpdateInput!): Submission!
  deleteSubmission(where: SubmissionWhereUniqueInput!): Submission
  deleteManySubmissions(where: SubmissionWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  answer(where: AnswerWhereUniqueInput!): Answer
  answers(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Answer]!
  answersConnection(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnswerConnection!
  question(where: QuestionWhereUniqueInput!): Question
  questions(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Question]!
  questionsConnection(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionConnection!
  quiz(where: QuizWhereUniqueInput!): Quiz
  quizzes(where: QuizWhereInput, orderBy: QuizOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Quiz]!
  quizzesConnection(where: QuizWhereInput, orderBy: QuizOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuizConnection!
  submission(where: SubmissionWhereUniqueInput!): Submission
  submissions(where: SubmissionWhereInput, orderBy: SubmissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Submission]!
  submissionsConnection(where: SubmissionWhereInput, orderBy: SubmissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubmissionConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Question {
  id: ID!
  quiz(where: QuizWhereInput, orderBy: QuizOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Quiz!]
  title: String!
  right_answer: [String!]!
  anwer_type: String
  theme: String
  language_code: String
}

type QuestionConnection {
  pageInfo: PageInfo!
  edges: [QuestionEdge]!
  aggregate: AggregateQuestion!
}

input QuestionCreateInput {
  id: ID
  quiz: QuizCreateManyInput
  title: String!
  right_answer: QuestionCreateright_answerInput
  anwer_type: String
  theme: String
  language_code: String
}

input QuestionCreateManyInput {
  create: [QuestionCreateInput!]
  connect: [QuestionWhereUniqueInput!]
}

input QuestionCreateright_answerInput {
  set: [String!]
}

type QuestionEdge {
  node: Question!
  cursor: String!
}

enum QuestionOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  anwer_type_ASC
  anwer_type_DESC
  theme_ASC
  theme_DESC
  language_code_ASC
  language_code_DESC
}

type QuestionPreviousValues {
  id: ID!
  title: String!
  right_answer: [String!]!
  anwer_type: String
  theme: String
  language_code: String
}

input QuestionScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  anwer_type: String
  anwer_type_not: String
  anwer_type_in: [String!]
  anwer_type_not_in: [String!]
  anwer_type_lt: String
  anwer_type_lte: String
  anwer_type_gt: String
  anwer_type_gte: String
  anwer_type_contains: String
  anwer_type_not_contains: String
  anwer_type_starts_with: String
  anwer_type_not_starts_with: String
  anwer_type_ends_with: String
  anwer_type_not_ends_with: String
  theme: String
  theme_not: String
  theme_in: [String!]
  theme_not_in: [String!]
  theme_lt: String
  theme_lte: String
  theme_gt: String
  theme_gte: String
  theme_contains: String
  theme_not_contains: String
  theme_starts_with: String
  theme_not_starts_with: String
  theme_ends_with: String
  theme_not_ends_with: String
  language_code: String
  language_code_not: String
  language_code_in: [String!]
  language_code_not_in: [String!]
  language_code_lt: String
  language_code_lte: String
  language_code_gt: String
  language_code_gte: String
  language_code_contains: String
  language_code_not_contains: String
  language_code_starts_with: String
  language_code_not_starts_with: String
  language_code_ends_with: String
  language_code_not_ends_with: String
  AND: [QuestionScalarWhereInput!]
  OR: [QuestionScalarWhereInput!]
  NOT: [QuestionScalarWhereInput!]
}

type QuestionSubscriptionPayload {
  mutation: MutationType!
  node: Question
  updatedFields: [String!]
  previousValues: QuestionPreviousValues
}

input QuestionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: QuestionWhereInput
  AND: [QuestionSubscriptionWhereInput!]
  OR: [QuestionSubscriptionWhereInput!]
  NOT: [QuestionSubscriptionWhereInput!]
}

input QuestionUpdateDataInput {
  quiz: QuizUpdateManyInput
  title: String
  right_answer: QuestionUpdateright_answerInput
  anwer_type: String
  theme: String
  language_code: String
}

input QuestionUpdateInput {
  quiz: QuizUpdateManyInput
  title: String
  right_answer: QuestionUpdateright_answerInput
  anwer_type: String
  theme: String
  language_code: String
}

input QuestionUpdateManyDataInput {
  title: String
  right_answer: QuestionUpdateright_answerInput
  anwer_type: String
  theme: String
  language_code: String
}

input QuestionUpdateManyInput {
  create: [QuestionCreateInput!]
  update: [QuestionUpdateWithWhereUniqueNestedInput!]
  upsert: [QuestionUpsertWithWhereUniqueNestedInput!]
  delete: [QuestionWhereUniqueInput!]
  connect: [QuestionWhereUniqueInput!]
  set: [QuestionWhereUniqueInput!]
  disconnect: [QuestionWhereUniqueInput!]
  deleteMany: [QuestionScalarWhereInput!]
  updateMany: [QuestionUpdateManyWithWhereNestedInput!]
}

input QuestionUpdateManyMutationInput {
  title: String
  right_answer: QuestionUpdateright_answerInput
  anwer_type: String
  theme: String
  language_code: String
}

input QuestionUpdateManyWithWhereNestedInput {
  where: QuestionScalarWhereInput!
  data: QuestionUpdateManyDataInput!
}

input QuestionUpdateright_answerInput {
  set: [String!]
}

input QuestionUpdateWithWhereUniqueNestedInput {
  where: QuestionWhereUniqueInput!
  data: QuestionUpdateDataInput!
}

input QuestionUpsertWithWhereUniqueNestedInput {
  where: QuestionWhereUniqueInput!
  update: QuestionUpdateDataInput!
  create: QuestionCreateInput!
}

input QuestionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quiz_every: QuizWhereInput
  quiz_some: QuizWhereInput
  quiz_none: QuizWhereInput
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  anwer_type: String
  anwer_type_not: String
  anwer_type_in: [String!]
  anwer_type_not_in: [String!]
  anwer_type_lt: String
  anwer_type_lte: String
  anwer_type_gt: String
  anwer_type_gte: String
  anwer_type_contains: String
  anwer_type_not_contains: String
  anwer_type_starts_with: String
  anwer_type_not_starts_with: String
  anwer_type_ends_with: String
  anwer_type_not_ends_with: String
  theme: String
  theme_not: String
  theme_in: [String!]
  theme_not_in: [String!]
  theme_lt: String
  theme_lte: String
  theme_gt: String
  theme_gte: String
  theme_contains: String
  theme_not_contains: String
  theme_starts_with: String
  theme_not_starts_with: String
  theme_ends_with: String
  theme_not_ends_with: String
  language_code: String
  language_code_not: String
  language_code_in: [String!]
  language_code_not_in: [String!]
  language_code_lt: String
  language_code_lte: String
  language_code_gt: String
  language_code_gte: String
  language_code_contains: String
  language_code_not_contains: String
  language_code_starts_with: String
  language_code_not_starts_with: String
  language_code_ends_with: String
  language_code_not_ends_with: String
  AND: [QuestionWhereInput!]
  OR: [QuestionWhereInput!]
  NOT: [QuestionWhereInput!]
}

input QuestionWhereUniqueInput {
  id: ID
}

type Quiz {
  id: ID!
  title: String!
}

type QuizConnection {
  pageInfo: PageInfo!
  edges: [QuizEdge]!
  aggregate: AggregateQuiz!
}

input QuizCreateInput {
  id: ID
  title: String!
}

input QuizCreateManyInput {
  create: [QuizCreateInput!]
  connect: [QuizWhereUniqueInput!]
}

type QuizEdge {
  node: Quiz!
  cursor: String!
}

enum QuizOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
}

type QuizPreviousValues {
  id: ID!
  title: String!
}

input QuizScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [QuizScalarWhereInput!]
  OR: [QuizScalarWhereInput!]
  NOT: [QuizScalarWhereInput!]
}

type QuizSubscriptionPayload {
  mutation: MutationType!
  node: Quiz
  updatedFields: [String!]
  previousValues: QuizPreviousValues
}

input QuizSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: QuizWhereInput
  AND: [QuizSubscriptionWhereInput!]
  OR: [QuizSubscriptionWhereInput!]
  NOT: [QuizSubscriptionWhereInput!]
}

input QuizUpdateDataInput {
  title: String
}

input QuizUpdateInput {
  title: String
}

input QuizUpdateManyDataInput {
  title: String
}

input QuizUpdateManyInput {
  create: [QuizCreateInput!]
  update: [QuizUpdateWithWhereUniqueNestedInput!]
  upsert: [QuizUpsertWithWhereUniqueNestedInput!]
  delete: [QuizWhereUniqueInput!]
  connect: [QuizWhereUniqueInput!]
  set: [QuizWhereUniqueInput!]
  disconnect: [QuizWhereUniqueInput!]
  deleteMany: [QuizScalarWhereInput!]
  updateMany: [QuizUpdateManyWithWhereNestedInput!]
}

input QuizUpdateManyMutationInput {
  title: String
}

input QuizUpdateManyWithWhereNestedInput {
  where: QuizScalarWhereInput!
  data: QuizUpdateManyDataInput!
}

input QuizUpdateWithWhereUniqueNestedInput {
  where: QuizWhereUniqueInput!
  data: QuizUpdateDataInput!
}

input QuizUpsertWithWhereUniqueNestedInput {
  where: QuizWhereUniqueInput!
  update: QuizUpdateDataInput!
  create: QuizCreateInput!
}

input QuizWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [QuizWhereInput!]
  OR: [QuizWhereInput!]
  NOT: [QuizWhereInput!]
}

input QuizWhereUniqueInput {
  id: ID
}

type Submission {
  id: ID!
  quiz(where: QuizWhereInput, orderBy: QuizOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Quiz!]
  user(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type SubmissionConnection {
  pageInfo: PageInfo!
  edges: [SubmissionEdge]!
  aggregate: AggregateSubmission!
}

input SubmissionCreateInput {
  id: ID
  quiz: QuizCreateManyInput
  user: UserCreateManyInput
}

type SubmissionEdge {
  node: Submission!
  cursor: String!
}

enum SubmissionOrderByInput {
  id_ASC
  id_DESC
}

type SubmissionPreviousValues {
  id: ID!
}

type SubmissionSubscriptionPayload {
  mutation: MutationType!
  node: Submission
  updatedFields: [String!]
  previousValues: SubmissionPreviousValues
}

input SubmissionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SubmissionWhereInput
  AND: [SubmissionSubscriptionWhereInput!]
  OR: [SubmissionSubscriptionWhereInput!]
  NOT: [SubmissionSubscriptionWhereInput!]
}

input SubmissionUpdateInput {
  quiz: QuizUpdateManyInput
  user: UserUpdateManyInput
}

input SubmissionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quiz_every: QuizWhereInput
  quiz_some: QuizWhereInput
  quiz_none: QuizWhereInput
  user_every: UserWhereInput
  user_some: UserWhereInput
  user_none: UserWhereInput
  AND: [SubmissionWhereInput!]
  OR: [SubmissionWhereInput!]
  NOT: [SubmissionWhereInput!]
}

input SubmissionWhereUniqueInput {
  id: ID
}

type Subscription {
  answer(where: AnswerSubscriptionWhereInput): AnswerSubscriptionPayload
  question(where: QuestionSubscriptionWhereInput): QuestionSubscriptionPayload
  quiz(where: QuizSubscriptionWhereInput): QuizSubscriptionPayload
  submission(where: SubmissionSubscriptionWhereInput): SubmissionSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
}

input UserUpdateInput {
  name: String
}

input UserUpdateManyDataInput {
  name: String
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    