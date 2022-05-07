const commonStatement = /* GraphQL */ `
id
title
content
published_at
`
const GET_POST = (args) => {
  return /* GraphQL */ `
  {
    post(${args}) {
      ${commonStatement}
    },
  }
`
}
const SEARCH_POSTS = () => {
  return /* GraphQL */ `
  query ($limit: Int, $sort: PostSort) {
    searchPosts(limit: $limit, sort: $sort) {
      ${commonStatement}
      created_unixtime
      updated_unixtime
    },
  }
`
}
const CREATE_POST = () => {
  return /* GraphQL */ `
  mutation ($post: CreatePost) {
    createPost(post: $post) {
      ${commonStatement}
    },
  }
`
}
const UPDATE_POST = () => {
  return /* GraphQL */ `
  mutation ($post: UpdatePost) {
    updatePost(post: $post) {
      ${commonStatement}
    }
  }

`
}
const REMOVE_POST = () => {
  return /* GraphQL */ `
  mutation ($id: String!) {
    removePost(id: $id) {
      ${commonStatement}
    },
  }
`
}

export { GET_POST, SEARCH_POSTS, CREATE_POST, UPDATE_POST, REMOVE_POST, }
