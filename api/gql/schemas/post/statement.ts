const GET_POST = (args) => {
  return `
  {
    post(id:"${args}") {
        id
        title
    },
  }
`
}
export { GET_POST, }
