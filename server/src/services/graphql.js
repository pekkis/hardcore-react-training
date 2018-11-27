import { ApolloServer, gql } from "apollo-server-express";
import personService from "./person";
import { DateTime } from "luxon";

const typeDefs = gql`
  enum Gender {
    m
    f
  }

  enum Handedness {
    r
    l
  }

  input HirePersonInput {
    firstName: String!
    lastName: String!
    gender: Gender!
    salary: Int!
    email: String!
    relatedToCEO: Boolean!
    birthDay: String!
    handedness: Handedness!
  }

  type HirePersonPayload {
    person: Person
  }

  input FirePersonInput {
    id: String!
  }

  type FirePersonPayload {
    id: String
  }

  type Person {
    id: ID!
    firstName: String!
    lastName: String!
    age: Float
    gender: Gender!
    salary: Int!
    email: String!
    relatedToCEO: Boolean!
    birthDay: String!
  }

  type Query {
    getPersons: [Person]!
    getPerson(id: String!): Person
  }

  type Mutation {
    firePerson(input: FirePersonInput!): FirePersonPayload
    hirePerson(input: HirePersonInput!): HirePersonPayload
  }
`;

const resolvers = {
  Query: {
    getPersons: async () => personService.all(),
    getPerson: async (_, { id }) => personService.findById(id)
  },
  Mutation: {
    firePerson: async (_, { input }) => {
      // console.log("firing person", { _, input });
      await personService.remove(input.id);

      return {
        id: input.id
      };
    },
    hirePerson: async (_, { input }) => {
      // console.log("hiring person", { _, input });
      const person = await personService.create({
        ...input,
        birthDay: DateTime.fromISO(input.birthDay).toJSDate()
      });
      return {
        person
      };
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

export default server;
