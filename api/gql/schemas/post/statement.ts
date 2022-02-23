const GET_POST = (args) => {
  return `
  {
    post(${args}) {
      id
      title
      content
      is_published
      published_at
      updated_at
    },
  }
`
}

const GET_POSTS = () => {
  return `
  {
    posts {
      id
      title
      content
      is_published
      published_at
      updated_at
    },
  }
`
}
export { GET_POST, GET_POSTS, }
