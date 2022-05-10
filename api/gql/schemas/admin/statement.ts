const SIGN_IN = () => {
  return /* GraphQL */ `
    mutation ($email: String!, $password: String!) {
      signIn(email: $email, password: $password) {
        id
        email
        password
        access_token
      }
    }
  `
}

const SIGN_UP = (args) => {
  return /* GraphQL */ `
  mutation {
    signUp(${args}) {
      id
      email
      password
      access_token
    },
  }
`
}

const CHECK_ACCESS_TOKEN = (args) => {
  return /* GraphQL */ `
  mutation {
    checkAccessToken(${args}) {
      id
      email
      password
      access_token
    },
  }
`
}
export { SIGN_IN, SIGN_UP, CHECK_ACCESS_TOKEN, }
