const CategoryTypeDef = /* GraphQL */ `
  type Category {
    _id: ID!
    id: String
    name: String
    parent_category_id: String
    parent_category: Category
    posts: [String]
    created_unixtime: Float
    updated_unixtime: Float
  }

  input CreateCategory {
    name: String!
    parent_category_id: String
    posts: [String]
  }

  input UpdateCategory {
    id: String!
    name: String!
    parent_category_id: String
    posts: [String]
  }

  input CategorySort {
    id: Int
    name: Int
    created_unixtime: Int
    updated_unixtime: Int
  }

  # the schema allows the following query:
  type Query {
    category(id: String!): Category
    categories(limit: Int, sort: CategorySort): [Category]
  }

  # this schema allows the following mutation:
  type Mutation {
    createCategory(category: CreateCategory): Category
    updateCategory(category: UpdateCategory): Category
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
