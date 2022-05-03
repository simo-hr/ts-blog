const commonStatement = `
id
title
content
is_published
published_at
`
const GET_POST = (args) => {
  return `
  {
    post(${args}) {
      ${commonStatement}
    },
  }
`
}
const GET_POSTS = () => {
  return `
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
  return `
  mutation ($post: CreatePost) {
    createPost(post: $post) {
      ${commonStatement}
    },
  }
`
}
const UPDATE_POST = () => {
  return `
  mutation ($post: UpdatePost) {
    updatePost(post: $post) {
      ${commonStatement}
    }
  }

`
}
const REMOVE_POST = (args) => {
  return `
  mutation {
    removeCategory (${args}) {
      ${commonStatement}
    },
  }
`
}

export { GET_POST, GET_POSTS, CREATE_POST, UPDATE_POST, REMOVE_POST, }
