import { gqlClient, } from '../../gql-client'
import { getStatement, } from '../common/arg'
import { SIGN_IN, SIGN_UP, } from './statement'

export default {
  async signIn (variables) {
    const gqls = getStatement(SIGN_IN, variables)
    const result = await gqlClient.mutation(gqls, {
      ...variables,
    })
    return result
  },
  async signUp (variables) {
    const gqls = getStatement(SIGN_UP, variables)
    const result = await gqlClient.mutation(gqls, {
      ...variables,
    })
    return result
  },
}
