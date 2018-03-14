import { makeExecutableSchema } from "graphql-tools";
import axios from "axios";

/*
"id" : 1,
    "name" : "New Jersey Devils",
    "link" : "/api/v1/teams/1",
    "venue" : {
      "name" : "Prudential Center",
      "link" : "/api/v1/venues/null",
      "city" : "Newark",
      "timeZone" : {
        "id" : "America/New_York",
        "offset" : -4,
        "tz" : "EDT"
      }
    },
*/

/*
{
    "id" : 8475149,
    "fullName" : "Marcus Johansson",
    "link" : "/api/v1/people/8475149",
    "firstName" : "Marcus",
    "lastName" : "Johansson",
    "primaryNumber" : "90",
    "birthDate" : "1990-10-06",
    "currentAge" : 27,
    "birthCity" : "Landskrona",
    "birthCountry" : "SWE",
*/

const typeDefs = `
# the schema allows the following query:

type Team {
  id: ID
  name: String!
  venue: Venue
  people: [Person]
}

type Person {
  id: ID
  firstName: String!
  lastName: String!
  primaryNumber: Int
  team: Team
}

type Venue {
  name: String!
  city: String!
}

type Query {
  teams: [Team]
  person(id: Int): Person
}
# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: Query
}
`;

const resolvers = {
  Query: {
    teams: () =>
      axios
        .get("https://statsapi.web.nhl.com/api/v1/teams")
        .then(res => res.data.teams),

    person: (_, { id }) =>
      axios
        .get(`https://statsapi.web.nhl.com/api/v1/people/${id}`)
        .then(res => res.data.people[0])
  },

  Person: {
    team: person => {
      console.log(person);

      if (!person.currentTeam) {
        return undefined;
      }

      return axios
        .get(
          `https://statsapi.web.nhl.com/api/v1/teams/${person.currentTeam.id}`
        )
        .then(res => {
          console.log(res.data);

          return res.data.teams[0];
        });
    }
  },

  Team: {
    people: async team => {
      const roster = await axios
        .get(`https://statsapi.web.nhl.com/api/v1/teams/${team.id}/roster`)
        .then(res => res.data.roster);

      return Promise.all(
        roster.map(r =>
          axios
            .get(`https://statsapi.web.nhl.com/api/v1/people/${r.person.id}`)
            .then(res => res.data.people[0])
        )
      );
    }
  }
};

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default executableSchema;
