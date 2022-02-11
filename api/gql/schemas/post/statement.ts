const GET_POST = (args) => {
  return `
  {
    post(${args}) {
        id
        title
    },
  }
`
}
export { GET_POST, }
