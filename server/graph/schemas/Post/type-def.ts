const PostTypeDef = /* GraphQL */ `
  type Post {
    _id: ID!
    id: String
    title: String
  }
  input Sort {
    created_date: Int
    title: Int
  }

  type PostsPagination {
    list: [Post]
    is_next_page: Boolean
    all_count: Int
  }

  # the schema allows the following query:
  type Query {
    post: Post
    posts: [Post]
  }

  # this schema allows the following mutation:
  type Mutation {
    createPost(title: String!): Post
    updatePost(id: String!): Post
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
