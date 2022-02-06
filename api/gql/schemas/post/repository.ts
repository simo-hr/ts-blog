import { gqlClient, } from '../../gql-client'
import { getStatement, } from '../common/arg'
import { GET_POSTS, } from './statement'

export default {
  async getPosts (variables) {
    const gqls = getStatement(GET_POSTS, variables)
    const result = await gqlClient.query(gqls, {
      ...variables,
    })
    return result
  },
}
