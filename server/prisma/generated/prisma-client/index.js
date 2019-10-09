"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Quiz",
    embedded: false
  },
  {
    name: "Submission",
    embedded: false
  },
  {
    name: "Question",
    embedded: false
  },
  {
    name: "Answer",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/carlos-loureda-8b31b2/qwestion/dev`
});
exports.prisma = new exports.Prisma();
