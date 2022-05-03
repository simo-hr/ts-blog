const commonStatement = /* GraphQL */ `
id
title
content
is_published
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
const GET_POSTS = () => {
  return /* GraphQL */ `
  {
    posts {
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

export { GET_POST, GET_POSTS, CREATE_POST, UPDATE_POST, REMOVE_POST, }
