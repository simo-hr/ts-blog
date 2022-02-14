const GET_POST = (args) => {
  return `
  {
    post(${args}) {
      id
      title
      content
      isPublished
      publishedAt
      updatedAt
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
      isPublished
      publishedAt
      updatedAt
    },
  }
`
}
export { GET_POST, GET_POSTS, }
