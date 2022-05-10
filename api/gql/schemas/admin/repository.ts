import { gqlClient, } from '../../gql-client'
import { getStatement, } from '../common/arg'
import { SIGN_IN, SIGN_UP, CHECK_ACCESS_TOKEN, } from './statement'

export default {
  async signIn (variables: { email: string; password: string }): Promise<any> {
    const result = await gqlClient.mutation(SIGN_IN(), {
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
  async checkAccessToken (variables) {
    const ggls = getStatement(CHECK_ACCESS_TOKEN, variables)
    const result = await gqlClient.mutation(ggls, {
      ...variables,
    })
    return result
  },
}
