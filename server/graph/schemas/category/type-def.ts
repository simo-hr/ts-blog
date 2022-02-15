const CategoryTypeDef = /* GraphQL */ `
  type Category {
    _id: ID!
    id: String!
    name: String!
    parentCategoryId: String
    updatedAt: Date!
  }

  # the schema allows the following query:
  type Query {
    category(id: String!): Category
    categories: [Category]
  }

  # this schema allows the following mutation:
  type Mutation {
    createCategory(name: String!, parentCategoryId: String): Category
    updateCategory(id: String!, name: String, parentCategoryId: String): Category
    removeCategory(id: String!): Category
  }

  # we need to tell the server which types represent the root query
  # and root mutation types. We call them RootQuery and RootMutation by convention.
  schema {
    query: Query
    mutation: Mutation
  }
`

export default CategoryTypeDef
