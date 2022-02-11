import { gqlClient, } from '../../gql-client'
import { getStatement, } from '../common/arg'
import { GET_POST, } from './statement'

export default {
  async getPost (variables) {
    const gqls = getStatement(GET_POST, variables)
    const result = await gqlClient.query(gqls, {
      ...variables,
    })
    return result
  },
}
