const SIGN_IN = (args) => {
  return `
  mutation {
    signIn(${args}) {
      id
      email
      password
      accessToken
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
      accessToken
    },
  }
`
}

const CHECK_ACCESS_TOKEN = (args) => {
  return `
  mutation {
    checkAccessToken(${args}) {
      id
      email
      password
      accessToken
    },
  }
`
}
export { SIGN_IN, SIGN_UP, CHECK_ACCESS_TOKEN, }
