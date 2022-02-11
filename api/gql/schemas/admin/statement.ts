const SIGN_IN = (args) => {
  return `
  mutation {
    signIn(${args}) {
      id
      email
      password
    },
  }
`
}

const SIGN_UP = (args) => {
  return `
  mutation {
    signUp(${args}) {
      id
      email
      password
    },
  }
`
}
export { SIGN_IN, SIGN_UP, }
