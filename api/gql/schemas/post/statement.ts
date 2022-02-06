const GET_POSTS = (argText) => {
  return `
  {
    posts(${argText}) {
      list {
        id
        title
      }
    },
  }
`
}
export { GET_POSTS, }
