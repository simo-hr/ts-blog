const AdminTypeDef = /* GraphQL */ `
  type Admin {
    _id: ID!
    id: String
    email: String
    password: String
  }

  # the schema allows the following query:
  type Query {
    admin: Admin
    admins: [Admin]
  }

  # this schema allows the following mutation:
  type Mutation {
    signIn(email: String!, password: String!): Admin
    signOut(id: String!): Admin
  }

  # we need to tell the server which types represent the root query
  # and root mutation types. We call them RootQuery and RootMutation by convention.
  schema {
    query: Query
    mutation: Mutation
  }
`

export default AdminTypeDef
