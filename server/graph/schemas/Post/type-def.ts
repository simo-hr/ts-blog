const PostTypeDef = /* GraphQL */ `
  type Post {
    id: String
    title: String
    content: String
    published_at: Float
    category_id: String
    category: Category
    created_unixtime: Float
    updated_unixtime: Float
  }

  input CreatePost {
    title: String!
    content: String!
    published_at: Float
    category_id: String
  }

  input UpdatePost {
    id: String!
    title: String!
    content: String!
    published_at: Float
    category_id: String
  }

  input PostSort {
    id: Int
    title: Int
    published_at: Int
    created_unixtime: Int
    updated_unixtime: Int
  }

  # the schema allows the following query:
  type Query {
    post(id: String!): Post
    searchPosts(limit: Int, sort: PostSort): [Post]
  }

  # this schema allows the following mutation:
  type Mutation {
    createPost(post: CreatePost): Post
    updatePost(post: UpdatePost): Post
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
