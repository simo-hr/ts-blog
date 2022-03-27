const PostTypeDef = /* GraphQL */ `
  type Post {
    id: String
    title: String
    content: String
    is_published: Boolean
    published_at: Float
    category_id: String
    created_unixtime: Float
    updated_unixtime: Float
  }

  type Posts {
    id: String
    title: String
    content: String
    is_published: Boolean
    published_at: Float
    category: Category
    created_unixtime: Float
    updated_unixtime: Float
  }

  input CreatePost {
    title: String!
    content: String!
    is_published: Boolean!
    published_at: Float
    category_id: String
  }

  input UpdatePost {
    id: String!
    title: String!
    content: String!
    is_published: Boolean!
    published_at: Float
    category_id: String
  }

  # the schema allows the following query:
  type Query {
    post(id: String!): Post
    posts: [Posts]
  }

  # this schema allows the following mutation:
  type Mutation {
    createPost(createPost: CreatePost): Post
    updatePost(updatePost: UpdatePost): Post
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
