import { gqlClient, } from '../../gql-client'
import { getStatement, } from '../common/arg'
import { GET_POST, GET_POSTS, } from './statement'

export default {
  async getPost (variables: { id: string }) {
    const gqls = getStatement(GET_POST, variables)
    const result = await gqlClient.query(gqls, {
      ...variables,
    })
    return result
  },
  async getPosts () {
    const gqls = getStatement(GET_POSTS, {})
    const result = await gqlClient.query(gqls, {})
    return result
  },
}
