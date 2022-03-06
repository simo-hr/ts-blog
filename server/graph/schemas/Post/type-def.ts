const PostTypeDef = /* GraphQL */ `
  type Post {
    _id: ID!
    id: String!
    title: String!
    content: String!
    is_published: Boolean!
    published_at: Date
    category: Category
    created_unixtime: Float!
    updated_unixtime: Float!
  }

  # the schema allows the following query:
  type Query {
    post(id: String!): Post
    posts: [Post]
  }

  # this schema allows the following mutation:
  type Mutation {
    createPost(title: String!, content: String!, is_published: Boolean, published_at: String, category_id: String): Post
    updatePost(title: String!, content: String!, is_published: Boolean, published_at: String, category_id: String): Post
    removePost(id: String!): Post
  }

  # we need to tell the server which types represent the root query
  # and root mutation types. We call them RootQuery and RootMutation by convention.
  schema {
    query: Query
    mutation: Mutation
  }
`

export default PostTypeDef
